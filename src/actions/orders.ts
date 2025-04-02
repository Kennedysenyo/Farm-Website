"use server";
import { db } from "@/db";
import { orders } from "@/db/schema";

export interface MissingField {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
}

export interface FormState {
  error: MissingField;
  success: boolean;
}

export async function placeOrder(
  productId: string | null,
  prevState: FormState, 
  formData: FormData
): Promise<FormState> {
  
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const address = formData.get("address") as string;
  const quantity = formData.get("quantity") as string;

  const missing: MissingField = {}

  if (!name) missing.name = "Name is required";
  if (!email) missing.email = "Email is required";
  if (!phone) missing.phone = "Phone is required";
  if (!address) missing.address = "Address is required";

  if (Object.keys(missing).length > 0) {
    return {
      error: missing,
      success: false,
    }
  }

  if (!productId) {
    return {
      error: {},
      success: false,
    }
  }

  await db.insert(orders).values({
    name, 
    email, 
    phone,
    address,
    quantity: parseInt(quantity),
    productId: parseInt(productId),
  });
  console.log("Order created succefully");

  return {
    error: {},
    success: true,
  }
}