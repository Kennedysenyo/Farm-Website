"use client";
import { useActionState, useState } from "react";
import { AddProductFormState, addProduct } from "../../actions/products"
import ImageUploader from "@/components/ImageUploader";


export default function ProductForm() {
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  const initialFormState: AddProductFormState = {
    errors: {},
    success: false,
  }

  const [ state, formAction, isPending ] = useActionState(addProduct, initialFormState)

  return (
    <div className="container  px-4 py-10 mb-40 pt-20">
      <form action={formAction}  className="space-y-4 bg-white p-6 rounded-lg shadow-md max-w-lg text-gray-900 mx-auto">
        <h2 className="text-xl font-semibold ">Add a New Product</h2>

        <div>
          <label htmlFor="name" className="block text-sm font-medium">Product Name</label>
          <input 
            id="name" 
            name="name"
            type="text" 
            className="w-full p-2 border rounded"
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
          />
          {
            state.errors.price && <p className="text-red-500">{state.errors.price}</p>
          }
        </div>

        {/* Upload Image */}
        <div>
          <label htmlFor="imageUrl" className="block text-sm font-medium">Product Image</label>
          <ImageUploader onUpload={setImageUrl} />
          <input type="hidden" name="imageUrl" value={imageUrl || ""} />
          {
            state.errors.imageUrl && <p className="text-red-500">{state.errors.imageUrl}</p>
          }
        </div>

        <button type="submit" disabled={isPending} className="px-4 py-2 bg-green-600 text-white rounded cursor-pointer">
          {isPending ? "Saving..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
