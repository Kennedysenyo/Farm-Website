import {NextResponse} from "next/server";
import { db } from "@/db";
import { orders } from "@/db/schema";
import nodemailer from "nodemailer";


export async function GET() {
 try {
  const response = await db.select().from(orders);

  if (response.length === 0) {
    return NextResponse.json({message: "No data found!"}, {status: 200})
  }
  return NextResponse.json(response, {status: 200})
 } catch (error) {
  return NextResponse.json({message: "Failed to fetch data!"}, {status: 500})
 }
}

export async function POST(req: Request, ) {
  try {
    const {name, email, phone, address, quantity, productId} = await req.json();
    const response = await db.insert(orders).values({name, email, phone, address, quantity, productId}).returning()
    if (response.length === 0) {
      return NextResponse.json({message: "Failed to Create Order"}, {status: 500})
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS}
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Order Confirmation",
      text: `Hello ${name}, your order for ${quantity} units has been placed successfuly!.\nOur agent would call you to continue the process. Thank you.`
    })

    return NextResponse.json(response, {status: 201});
  }catch (error) {
    return NextResponse.json({message: "Failed to Create Order"}, {status: 500})
  }

}