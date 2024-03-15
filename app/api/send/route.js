import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_API_KEY);

export async function POST(content) {
  try {
    
    await resend.emails.send({
      from: process.env.NEXT_PUBLIC_SMTP_EMAIL,
      to: process.env.NEXT_PUBLIC_SMTP_RECIPIENT,
      subject: "New Contact Form Submission | Jean Emmanuel Cadet",
      html:  `
        <p>Name: ${content.name}</p>
        <p>Company: ${content.company}</p>
        <p>Email: ${content.email}</p>
        <p>Phone: ${content.phone}</p>
        <p>Message: ${content.message}</p>
        <p>Service need: ${content.reason.join(", ")}</p>
        <p>Budget: ${content.budget}</p>
        `,
    });
console.log(content);
    return Response.json(content);
  } catch (error) {
    return Response.json({ error });
  }
}