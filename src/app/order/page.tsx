"use client";
import { useActionState } from "react";
import { placeOrder, FormState } from "../../actions/orders";
import { useSearchParams } from "next/navigation";


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

  return (
    <div className="container mx-auto px-4 py-10 mb-40">
      <h1 className="text-3xl font-bold text-center mb-6">Place Your Order</h1>
      <form action={formAction} className="max-w-md mx-auto border border-green-600 rounded-lg shadow-lg p-6 space-y-2">

        <div>
          <label htmlFor="name" className="block text-gray-400 font-semibold">
            Full Name:
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="w-full border border-green-600 rounded-md p-2 mt-1 mb-3"
          />
          {
            state.error.name && <p className="text-red-500">{state.error.name}</p>
          }
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-400 font-semibold">
            Email Address:
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full border border-green-600 rounded-md p-2 mt-1 mb-3"
          />
          {
            state.error.email && <p className="text-red-500">{state.error.email}</p>
          }
        </div>

        <div>
          <label htmlFor="phone" className="block text-gray-400 font-semibold">
            Phone Number:
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            className="w-full border border-green-600 rounded-md p-2 mt-1 mb-3"
          />
          {
            state.error.phone && <p className="text-red-500">{state.error.phone}</p>
          }
        </div>

        <div>
          <label htmlFor="address" className="block text-gray-400 font-semibold">
            Delivery Address:
          </label>
          <input
            id="address"
            type="text"
            name="address"
            className="w-full border border-green-600 rounded-md p-2 mt-1 mb-3"
            />
          {
            state.error.address && <p className="text-red-500">{state.error.address}</p>
          }
        </div>

        <div>
          <label htmlFor="quantity" className="block text-gray-400 font-semibold">
            Quantity:
          </label>
          <input
            id="quantity"
            type="number"
            name="quantity"
            defaultValue={1}
            min="1"
            className="w-full border border-green-600 rounded-md p-2 mt-1 mb-3"
          />
        </div>

        <button
          type="submit"
          disabled={isPending} 
          className={`w-full py-2 rounded-lg transition cursor-pointer ${
            isPending ? "bg-gray-400" : "bg-green-600 hover:bg-green-700 text-white"
          }`}
        >
          {isPending ? "Processing..." : "Confirm Order"}
        </button>
      </form>
    </div>
  )
}