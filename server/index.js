import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env from current directory
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Create transporter for sending emails
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Verify connection on startup
transporter.verify(function (error, success) {
  if (error) {
    console.error('SMTP Connection Error:', error.message);
    console.error('\nTroubleshooting tips:');
    console.error('1. Verify your app password is correct (16 characters, no spaces)');
    console.error('2. Ensure 2-Step Verification is enabled');
    console.error('3. Check Google Workspace admin settings allow app passwords');
    console.error('4. Verify SMTP_USER matches your Google Workspace email exactly');
  } else {
    console.log('✓ SMTP Server is ready to send emails');
  }
});

// Email template helper
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

${formData.drawings && formData.drawings.length > 0 ? `\nAttachments: ${formData.drawings.length} file(s) uploaded` : ''}

---
This email was sent from the Maketronics contact form.
  `.trim();
};

// API endpoint to send emails
app.post('/api/send-email', async (req, res) => {
  try {
    const formData = req.body;

    // Validate required fields
    if (!formData.email || !formData.fullName) {
      return res.status(400).json({ error: 'Email and Full Name are required' });
    }

    const adminEmail = process.env.ADMIN_EMAIL || 'admin@maketronics.com';
    const userEmail = formData.email;
    
    // Custom "from" email address (can include display name)
    // Format: "Display Name <email@domain.com>" or just "email@domain.com"
    const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USER;
    const fromName = process.env.FROM_NAME || 'Maketronics';
    const fromAddress = process.env.FROM_EMAIL 
      ? (process.env.FROM_NAME ? `${fromName} <${fromEmail}>` : fromEmail)
      : `${fromName} <${process.env.SMTP_USER}>`;

    // Email to admin
    const adminMailOptions = {
      from: fromAddress,
      to: adminEmail,
      subject: `New Project Enquiry from ${formData.fullName}`,
      text: formatEmailContent(formData),
    };

    // Email to user (confirmation)
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

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    res.json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
});

// Test endpoint to verify email configuration
app.get('/api/test-email', async (req, res) => {
  try {
    await transporter.verify();
    res.json({ 
      success: true, 
      message: 'Email configuration is valid',
      smtpUser: process.env.SMTP_USER,
      fromEmail: process.env.FROM_EMAIL || process.env.SMTP_USER,
      fromName: process.env.FROM_NAME || 'Maketronics',
      adminEmail: process.env.ADMIN_EMAIL
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: 'Email configuration error',
      details: error.message,
      code: error.code
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`SMTP User: ${process.env.SMTP_USER || 'Not configured'}`);
  console.log(`From Email: ${process.env.FROM_EMAIL || process.env.SMTP_USER || 'Not configured'}`);
  console.log(`From Name: ${process.env.FROM_NAME || 'Maketronics'}`);
  console.log(`Admin Email: ${process.env.ADMIN_EMAIL || 'Not configured'}`);
});
