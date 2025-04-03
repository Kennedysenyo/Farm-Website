"use client"
import { OrdersType, ProductsType } from "@/types/types";
import { useState } from "react";

interface OrdersTypeProps {
  order: OrdersType
  product: ProductsType
}

const Order = ({ order, product }: OrdersTypeProps) => {
  const [status, setStatus] = useState(order.status || "Pending");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-md w-full">
        <img src={product.imageUrl} alt={order.name} className="w-full h-56 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-green-700 font-semibold text-xl mt-2">Ghc{product.price}</p>
          <p className="text-gray-600 mt-1">Quantity: {order.quantity}</p>
          <p className="text-gray-600 mt-1">Total: Ghc{product.price * order.quantity}</p>
          <p className="text-gray-600 mt-1">Customer: {order.name}</p>
          <p className="text-gray-600 mt-1">Phone: {order.phone}</p>
          <p className="text-gray-600 mt-1">Address: {order.address}</p>

          {/* Order Status Toggle */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Order Status</h3>
            <div className="flex gap-4">
              {["Pending", "Shipped", "Delivered"].map((option) => (
                <label key={option} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="status"
                    value={option}
                    checked={status === option}
                    onChange={() => setStatus(option)}
                    className="hidden"
                  />
                  <span
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                      status === option ? "bg-green-600 text-white" : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
