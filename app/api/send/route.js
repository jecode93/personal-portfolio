import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();

  try {
    const transporter = nodemailer.createTransport({
      // SMTP settings
      host: process.env.SMTP_SERVER,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_RECIPIENT,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: process.env.SMTP_RECIPIENT,
      subject: "New Contact Form Submission | Jean Emmanuel Cadet",
      html: `
        <p>Name: ${data.name}</p>
        <p>Email: ${data.email}</p>
        <p>Phone: ${data.phone}</p>
        <p>Company: ${data.company}</p>
        <p>Message: ${data.message}</p>
        <p>Service need: ${data.reason.join(", ")}</p>
        <p>Budget: ${data.budget}</p>
        `,
    });

    return NextResponse.json({status: 200});
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
