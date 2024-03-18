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

    await new Promise((resolve, reject) => {
      transporter.sendMail(
        {
          from: `@jecode93 | Personal website <${process.env.SMTP_EMAIL}>`,
          to: `The owner | <${process.env.SMTP_RECIPIENT}>`,
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
        },
        (err, info) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(info);
          }
        }
      );
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 250 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error has occurred!", error },
      { status: 500 }
    );
  }
}
