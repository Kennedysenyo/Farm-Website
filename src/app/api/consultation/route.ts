import { NextResponse } from "next/server";
import { db } from "@/db";
import { consultation } from "@/db/schema";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try{
    const {name, email, date, message} = await req.json();

    if(!name || !email || !date) {
      console.log("trigured")
      return NextResponse.json({error: "Missing required field"}, {status: 400})
    }

    // Convert date string to a Date Object
    const formattedDate = new Date(date);

    if (isNaN(formattedDate.getTime())) {
      return NextResponse.json({error: "Invalid date format"}, {status: 400});
    }

    // Save to data database
    await db.insert(consultation).values({
      name, 
      email, 
      date: formattedDate, 
      message
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: [email, process.env.RECEIVER_EMAIL],
      subject: "Consultation Booking Confirmation",
      html: `<p>Hello ${name},<p>
             <p>Your consultation is scheduled for <strong>${formattedDate.toLocaleString()}</strong>.</p>
             <p>We will get back to you soon.</p>
             <p>Thank you!</p>
             `
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({message: "Consultation booked successfully!"}, {status: 201})
  }catch (error) {
    console.error("Error booking consultation:", error);
    return NextResponse.json({error: "Internal Server Error"}, {status: 500})
  }
}