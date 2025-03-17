import {NextResponse} from "next/server";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { orders, products} from "@/db/schema";
import { sendOrderEmail } from "@/lib/mail";


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


// Get a specific product
export async function POST(req: Request, ) {
  try {
    
    const {name, email, phone, address, quantity, productId} = await req.json();
    
    const response = await db.insert(orders).values({name, email, phone, address, quantity, productId}).returning()
    
    if (response.length === 0) {
      return NextResponse.json({message: "Failed to Create Order"}, {status: 500})
    }
    
    const product = await db.select().from(products).where(eq(products.id, productId))
    console.log(product)

    // Send Order Email to Client
    await sendOrderEmail(email, {name: product[0].name, quantity, address})
   
    return NextResponse.json(response, {status: 201});
  }catch (error) {
    return NextResponse.json({message: "Failed to Create Order"}, {status: 500})
  }

}