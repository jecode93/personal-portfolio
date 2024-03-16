// pages/api/sendEmail.js
import nodemailer from "nodemailer";
import { NextReponse } from 'next/server';


export async function POST(NextRequest) {
  const data = await NextRequest.json();

  try {
    const transporter = nodemailer.createTransport({
      // Your SMTP settings
      host: process.env.NEXT_PUBLIC_SMTP_SERVER,
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_SMTP_RECIPIENT,
        pass: process.env.NEXT_PUBLIC_SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_SMTP_EMAIL,
      to: process.env.NEXT_PUBLIC_SMTP_RECIPIENT,
      subject: "New Contact Form Submission",
      html: `
        <p>Name: ${data.name}</p>
        <p>Company: ${data.company}</p>
        <p>Email: ${data.email}</p>
        <p>Phone: ${data.phone}</p>
        <p>Message: ${data.message}</p>
        <p>Service need: ${data.reason.join(", ")}</p>
        <p>Budget: ${data.budget}</p>
        `,
    });

    return NextReponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextReponse.json({ success: false });
  }
}
