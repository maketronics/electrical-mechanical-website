import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import Enquiry from './models/Enquiry.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '2mb' }));

const MONGODB_URI = process.env.MONGODB_URI;

function smtpConfigured() {
  return Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);
}

function createTransporter() {
  if (!smtpConfigured()) return null;
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
}

let transporter = createTransporter();

if (transporter) {
  transporter.verify((error) => {
    if (error) {
      console.error('SMTP Connection Error:', error.message);
      console.error('\nTroubleshooting:');
      console.error('- Set SMTP_USER and SMTP_PASS on the host (e.g. Render → Environment).');
      console.error('- Gmail: enable 2-Step Verification and create an App Password for SMTP_PASS.');
      console.error('- SMTP_USER must match the account that owns the app password.');
    } else {
      console.log('✓ SMTP Server is ready to send emails');
    }
  });
} else {
  console.warn('⚠ SMTP_USER / SMTP_PASS not set — enquiries will be saved to MongoDB only until SMTP is configured.');
}

async function connectDb() {
  if (!MONGODB_URI) {
    console.error('MONGODB_URI is not set. Add it to server/.env or your host environment.');
    return false;
  }
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✓ Connected to MongoDB');
    return true;
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    return false;
  }
}

const formatEmailContent = (formData) => {
  return `
New Project Enquiry from ${formData.fullName}

Contact Information:
- Full Name: ${formData.fullName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Company: ${formData.company}

Project Details:
- Project Type: ${formData.projectType || 'N/A'}
- TPH Required: ${formData.tph || 'N/A'}
- Feed Rock Type / Bulk Density: ${formData.feedRockBulkDensity || 'N/A'}
- Top Feed Size: ${formData.topFeedSize || 'N/A'}
- Clay & Moisture Content: ${formData.clayMoisture || 'N/A'}
- Voltage & Frequency: ${formData.voltageFrequency || 'N/A'}

Message:
${formData.message || 'No message provided'}

${formData.drawingsMeta?.count ? `\nAttachments: ${formData.drawingsMeta.count} file(s) (${formData.drawingsMeta.names?.join(', ') || 'names not provided'})` : ''}

---
This email was sent from the Maketronics contact form.
  `.trim();
};

function normalizeDrawingsMeta(formData) {
  const raw = formData.drawings;
  if (!Array.isArray(raw) || raw.length === 0) {
    return { count: 0, names: [] };
  }
  const names = raw
    .map((d) => (d && typeof d === 'object' && d.name ? String(d.name) : null))
    .filter(Boolean);
  return {
    count: raw.length,
    names,
  };
}

app.post('/api/send-email', async (req, res) => {
  try {
    const formData = req.body;

    if (!formData.email || !formData.fullName) {
      return res.status(400).json({ error: 'Email and Full Name are required' });
    }

    if (!MONGODB_URI) {
      return res.status(503).json({
        error: 'Server storage is not configured',
        details: 'Set MONGODB_URI on the server',
      });
    }

    const drawingsMeta = normalizeDrawingsMeta(formData);

    const enquiry = await Enquiry.create({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone || '',
      company: formData.company || '',
      projectType: formData.projectType || '',
      tph: formData.tph || '',
      feedRockBulkDensity: formData.feedRockBulkDensity || '',
      topFeedSize: formData.topFeedSize || '',
      clayMoisture: formData.clayMoisture || '',
      voltageFrequency: formData.voltageFrequency || '',
      message: formData.message || '',
      drawingsMeta,
      emailSent: false,
      emailError: null,
    });

    const adminEmail = process.env.ADMIN_EMAIL || 'admin@maketronics.com';
    const userEmail = formData.email;
    const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USER;
    const fromName = process.env.FROM_NAME || 'Maketronics';
    const fromAddress = fromEmail
      ? fromName
        ? `${fromName} <${fromEmail}>`
        : fromEmail
      : `${fromName} <${process.env.SMTP_USER}>`;

    const payloadForEmail = { ...formData, drawingsMeta };

    if (!transporter) {
      return res.status(200).json({
        success: true,
        saved: true,
        id: enquiry._id,
        emailSent: false,
        warning:
          'Enquiry saved, but email was not sent. Configure SMTP_USER and SMTP_PASS on the server.',
      });
    }

    const adminMailOptions = {
      from: fromAddress,
      to: adminEmail,
      subject: `New Project Enquiry from ${formData.fullName}`,
      text: formatEmailContent(payloadForEmail),
    };

    const userMailOptions = {
      from: fromAddress,
      to: userEmail,
      subject: 'Thank you for contacting Maketronics',
      text: `
Dear ${formData.fullName},

Thank you for contacting Maketronics. We have received your project enquiry and will review it shortly.

Your enquiry details:
- Project Type: ${formData.projectType || 'N/A'}
- TPH Required: ${formData.tph || 'N/A'}

Our team will get back to you within 24-48 hours.

Best regards,
Maketronics Team
      `.trim(),
    };

    try {
      await transporter.sendMail(adminMailOptions);
      await transporter.sendMail(userMailOptions);
      enquiry.emailSent = true;
      await enquiry.save();

      res.json({
        success: true,
        saved: true,
        id: enquiry._id,
        emailSent: true,
        message: 'Emails sent successfully',
      });
    } catch (mailErr) {
      console.error('Error sending email:', mailErr);
      enquiry.emailError = mailErr.message;
      await enquiry.save();

      res.status(200).json({
        success: true,
        saved: true,
        id: enquiry._id,
        emailSent: false,
        warning:
          'Your enquiry was saved, but email delivery failed. Our team can still see it in the database.',
        details: mailErr.message,
      });
    }
  } catch (error) {
    console.error('send-email error:', error);
    res.status(500).json({ error: 'Failed to process enquiry', details: error.message });
  }
});

app.get('/api/test-email', async (req, res) => {
  try {
    if (!transporter) {
      return res.status(500).json({
        success: false,
        error: 'SMTP not configured',
        details: 'Set SMTP_USER and SMTP_PASS',
        smtpConfigured: false,
      });
    }
    await transporter.verify();
    res.json({
      success: true,
      message: 'Email configuration is valid',
      smtpUser: process.env.SMTP_USER,
      fromEmail: process.env.FROM_EMAIL || process.env.SMTP_USER,
      fromName: process.env.FROM_NAME || 'Maketronics',
      adminEmail: process.env.ADMIN_EMAIL,
      mongoConnected: mongoose.connection.readyState === 1,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Email configuration error',
      details: error.message,
      code: error.code,
    });
  }
});

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    mongo: mongoose.connection.readyState === 1,
    smtp: smtpConfigured(),
  });
});

async function start() {
  await connectDb();
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`MongoDB: ${mongoose.connection.readyState === 1 ? 'connected' : 'not connected'}`);
    console.log(`Mongo URI: ${MONGODB_URI ? 'set' : 'MISSING MONGODB_URI'}`);
    console.log(`SMTP User: ${process.env.SMTP_USER || 'Not configured'}`);
    console.log(`Admin Email: ${process.env.ADMIN_EMAIL || 'Not configured'}`);
  });
}

start();
