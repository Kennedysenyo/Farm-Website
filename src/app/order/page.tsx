"use client";
import { useActionState, useEffect, useState, } from "react";
import { placeOrder, FormState } from "../../actions/orders";
import { useSearchParams } from "next/navigation";
import { ProductsType } from "@/types/types";


export default function OrdersPage() {

  const searchParams  = useSearchParams();
  const productId = searchParams.get("product");

  const initialState: FormState = {
    error: {},
    success: false,
  }
  
  const [ state, formAction, isPending ] = useActionState(
    placeOrder.bind(null, productId),
    initialState
  ) 
  
  const [product, setProduct] = useState<ProductsType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);


  


  useEffect(() => {
    if (!productId) return; 
  
    async function fetchProduct() {
      setLoading(true); 
  
      try {
        const res = await fetch(`/api/products/${productId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (!res.ok) {
          throw new Error(`Failed to fetch product: ${res.statusText}`);
        }
  
        const data: ProductsType = await res.json(); 
  
        if (!data) {
          throw new Error("No data found");
        }
  
        setProduct(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
        console.error(error);
      } finally {
        setLoading(false); 
      }
    }
  
    fetchProduct();
  }, [productId]); 
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-10 mb-40">
        <div className="max-w-md flex mx-auto items-center p-5 shadow-lg mb-40">
          <p className="text-gray-600 text-3xl text-center mx-auto">Loading ...</p>
        </div>
      </div>
    )
  }

  if(!product) {
    return (
      <div className="container mx-auto px-4 py-10 mb-40">
        <div className="max-w-md flex mx-auto items-center p-5 shadow-lg mb-40">
          <p className="text-red-600 text-3xl text-center mx-auto">Product Not Found</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-10 mb-40 ">
    {state.success ? (
      <div className="max-w-md flex mx-auto items-center p-5 shadow-lg mb-40 mt-5">
        <p className="text-green-700 text-3xl text-center mx-auto">Order Placed Successfully</p>
      </div>
  ) : (
      <>
        <h1 className="text-3xl font-bold text-center mb-6">Place Your Order</h1>

        {product && (
          <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-6">
            <img src={product.imageUrl} alt={product.name} className="w-full h-56 object-cover" />
            <div className="p-5">
              <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="text-green-700 font-semibold text-xl mt-2">Ghc{product.price}</p>
            </div>
          </div>
        )}


        <form action={formAction} className="max-w-md mx-auto border border-green-600 rounded-lg shadow-lg p-6 space-y-2">
          <div>
            <label htmlFor="name" className="block text-gray-400 font-semibold">Full Name:</label>
            <input id="name" type="text" name="name" className="w-full border border-green-600 rounded-md p-2 mt-1 mb-3" />
            {state.error.name && <p className="text-red-500">{state.error.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-400 font-semibold">Email Address:</label>
            <input id="email" type="email" name="email" className="w-full border border-green-600 rounded-md p-2 mt-1 mb-3" />
            {state.error.email && <p className="text-red-500">{state.error.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-400 font-semibold">Phone Number:</label>
            <input id="phone" type="tel" name="phone" className="w-full border border-green-600 rounded-md p-2 mt-1 mb-3" />
            {state.error.phone && <p className="text-red-500">{state.error.phone}</p>}
          </div>

          <div>
            <label htmlFor="address" className="block text-gray-400 font-semibold">Delivery Address:</label>
            <input id="address" type="text" name="address" className="w-full border border-green-600 rounded-md p-2 mt-1 mb-3" />
            {state.error.address && <p className="text-red-500">{state.error.address}</p>}
          </div>

          <div>
            <label htmlFor="quantity" className="block text-gray-400 font-semibold">Quantity:</label>
            <input id="quantity" type="number" name="quantity" defaultValue={1} min="1" className="w-full border border-green-600 rounded-md p-2 mt-1 mb-3" />
          </div>

          <button type="submit" disabled={isPending} className={`w-full py-2 rounded-lg transition cursor-pointer ${
            isPending ? "bg-gray-400" : "bg-green-600 hover:bg-green-700 text-white"
          }`}>
            {isPending ? "Processing..." : "Confirm Order"}
          </button>
        </form>
      </>
    )}
  </div>

  )
}