"use server"
import { db } from "@/db";
import { orders } from "@/db/schema";
import { eq } from "drizzle-orm";
import { OrdersType } from "@/types/types";



export const getOrderById = async(id: number) => {
  const order: OrdersType[] = await db.select().from(orders).where(eq(orders.id, id))

  return order[0];
}