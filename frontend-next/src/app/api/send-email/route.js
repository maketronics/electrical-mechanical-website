import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { connectDB } from "@/lib/mongodb";
import Enquiry from "@/lib/models/Enquiry";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const body = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      projectType: formData.get("projectType"),
      tph: formData.get("tph"),
      feedRockBulkDensity: formData.get("feedRockBulkDensity"),
      topFeedSize: formData.get("topFeedSize"),
      clayMoisture: formData.get("clayMoisture"),
      voltageFrequency: formData.get("voltageFrequency"),
      message: formData.get("message"),
    };

    await connectDB();

    // 💾 Save to MongoDB
    const enquiry = await Enquiry.create(body);

    // 📧 Email setup
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailText = `
New Enquiry Received:

Name: ${body.fullName}
Email: ${body.email}
Phone: ${body.phone}
Company: ${body.company}
Project Type: ${body.projectType}
TPH: ${body.tph}
Message: ${body.message}
    `;

    // 📩 Send to Admin
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Enquiry from ${body.fullName}`,
      text: emailText,
    });

    // 📩 Send confirmation to user
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: body.email,
      subject: "Thank you for contacting Maketronics",
      text: `Hi ${body.fullName}, we received your enquiry.`,
    });

    return NextResponse.json({
      success: true,
      message: "Enquiry saved & emails sent",
      id: enquiry._id,
    });

  } catch (error) {
    console.error("API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}