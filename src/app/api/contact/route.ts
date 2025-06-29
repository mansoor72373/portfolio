import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Configure your SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mansoor72373@gmail.com", // Replace with your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Set this in your environment variables
      },
    });

    const mailOptions = {
      from: email,
      to: "mansoor72373@gmail.com",
      subject: `New Contact Us Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    let errorMessage = "Failed to send message.";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 }
    );
  }
}
