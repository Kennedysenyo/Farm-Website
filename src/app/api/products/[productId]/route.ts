import { db } from "@/db";
import { products } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req: Request, {params}: {params: Promise<{productId: string}>}) {
  const productId = (await params).productId;
  try {
    const product = await db.select().from(products).where(eq(products.id, parseInt(productId)))

    if(product.length === 0) {
      return NextResponse.json({message: "No resource Found"}, {status: 404})
    }

    return NextResponse.json(product[0], {status: 200})
    
  }catch(error) {
    console.error(error);
    return NextResponse.json({error: "Failed to fetch product"}, {status: 500})
  }

}