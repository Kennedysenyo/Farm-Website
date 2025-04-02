"use server";
import { db } from "@/db";
import { products } from "@/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { ProductsType } from "@/types/types";
import { revalidatePath } from "next/cache";

export interface EditProductFormErrors {
  name?: string;
  price?: string;
  description?: string;
  imageUrl?: string;
}

export interface EditProductFormState {
  errors: EditProductFormErrors;
  loading: boolean;
}

//  Get Product By Id
export const getProduct = async (productId: number): Promise<ProductsType> => {

  const product = await db.select().from(products).where(eq(products.id, productId));
  
  return product[0] ;  
};



// Add products to Database
export interface AddProductFormErrors {
  name?: string;
  description?: string;
  price?: string;
  imageUrl?: string;
} 

export interface AddProductFormState {
  errors: AddProductFormErrors,
  success: boolean;
}

export const addProduct = async(
  prevState: AddProductFormState, formData: FormData
) => {

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = formData.get("price") as string;
  const imageUrl = formData.get("imageUrl") as string;
  console.log(imageUrl)

  const errors: AddProductFormErrors = {}

  if (!name) errors.name = "Name is required";
  if (!description) errors.description = "Description is required";
  if (!price) errors.price = "Price is required";
  if (!imageUrl) errors.imageUrl = "Please select an image!";

  if(Object.keys(errors).length > 0) {
    return {
      errors,
      success: false,
    }
  }

 await db.insert(products).values({name, description, price: parseInt(price), imageUrl});

  redirect("/admin/products")

}

// Edit Product in Database 
export const editProduct =  async(id: number, prevState: EditProductFormState, formData: FormData) => {

  const name = formData.get("name") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;
  const imageUrl = formData.get("imageUrl") as string;

  const errors: EditProductFormErrors = {};

  if (!name) errors.name = "Name is required";
  if (!description) errors.description = "Description is required";
  if (!price) errors.price = "Price is required";
  if (!imageUrl) errors.imageUrl = "Please select an image!";

  if(Object.keys(errors).length > 0) {
    return {
      errors,
      loading: false,
    }
  }

  await db.update(products).set({name, price: parseInt(price), description, imageUrl }).where(eq(products.id, id))

  redirect("/admin/products")
}


// Delete Product from Database
export const deleteProduct = async(id: number) => {
  new Promise((resolve) => setTimeout(resolve, 15000))
  await db.delete(products).where(eq(products.id, id));
  revalidatePath("/admin/products")

}