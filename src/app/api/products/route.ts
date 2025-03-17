import { db } from "@/db";
import { products } from "@/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await db.select().from(products);

    if (response.length === 0) {
      return NextResponse.json({message: "No Data Found."})
    }
    return NextResponse.json(response, {status: 200})
  }catch (error) {
    return NextResponse.json({error: "Failed to Fetch products data."}, {status: 500})
  }
}

export async function POST(req: Request) {
  try {
    const {name, description, price, imageUrl} = await req.json();

    if(!name || !price || !imageUrl) {
      return NextResponse.json({error: "Missing required fields"}, {status: 400});
    }

    await db.insert(products).values({
      name,
      description,
      price,
      imageUrl,
    });

    return NextResponse.json({message: "Product added successfully"});
  }catch (error) {
    console.error("Error adding product", error);
    return NextResponse.json({error: "Internal Server Error"}, {status: 500})
  }
}
