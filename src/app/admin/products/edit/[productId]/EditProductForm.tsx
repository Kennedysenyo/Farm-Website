"use client";
import { useActionState, useState } from "react";
import { EditProductFormState, editProduct } from "../../../actions/products";
import ImageUploader from "@/components/ImageUploader";
import { ProductsType } from "@/types/types";


export default function EditProduct({product}: {product: ProductsType}) {
  const [ imageUrl, setImageUrl] = useState<string>(() => (product.imageUrl))


  const initialFormState: EditProductFormState = {
    errors: {},
    loading: false,
  }

  const [ state, formAction, isPending ] = useActionState(
    editProduct.bind(null, product.id), 
    initialFormState
  )


  return (
    <form action={formAction}  className="space-y-4 bg-white p-6 rounded-lg shadow-md max-w-lg text-gray-900 mx-auto mt-20">
      <h2 className="text-xl font-semibold text-center">Edit Product</h2>
      
      <div>
        <img src={imageUrl} alt={product.name} width={200} className="object-cover mx-auto" />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium">Product Name</label>
        <input 
          id="name" 
          name="name"
          type="text" 
          className="w-full p-2 border rounded"
          defaultValue={product.name}
        />
        {
          state.errors.name && <p className="text-red-500">{state.errors.name}</p>
        }
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium">Description</label>
        <textarea 
          id="description" 
          name="description"
          className="w-full p-2 border rounded"
          defaultValue={product.description}
        />
        {
          state.errors.description && <p className="text-red-500">{state.errors.description}</p>
        }
      </div>

      <div>
        <label htmlFor="price" className="block text-sm font-medium">Price</label>
        <input 
          id="price" 
          name="price"
          type="text" 
          className="w-full p-2 border rounded"
          defaultValue={product.price ?? ""}
        />
        {
          state.errors.price && <p className="text-red-500">{state.errors.price}</p>
        }
      </div>

      <div>
        <label htmlFor="imageUrl" className="block text-sm font-medium">Product Image</label>
        <input type="hidden" name="imageUrl" value={imageUrl} />
        <ImageUploader onUpload={setImageUrl} />
        {
          state.errors.imageUrl && <p className="text-red-500">{state.errors.imageUrl}</p>
        }
      </div>
   
      <button type="submit" disabled={isPending} className="px-4 py-2 bg-green-600 text-white rounded cursor-pointer">
        {isPending ? "Saving..." : "Add Product"}
      </button>
    </form>
  );
}
