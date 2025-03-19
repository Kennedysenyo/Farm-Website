import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try{
    const { name, email, subject, message } = await req.json();
    console.log({name, email, subject, message})

    if (!name || !email || !subject || !message) {
      return NextResponse.json({error: "All fields are required"}, {status: 400})
    }

    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });


    // Content of Email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form Message: ${subject}`,
      text: `From ${name}(${email})\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({message: "Message sent successfully"}, {status: 200});
  }catch (error) {
    console.error("Email sending error", error)
    return NextResponse.json({error: "Failed to send message"}, {status: 500});
  }
}

