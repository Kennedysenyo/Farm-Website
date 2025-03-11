"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function OrderPage() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("product") || ""; // Avoid sending null values

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    quantity: 1,
  });

  const [loading, setLoading] = useState(false); // Track submit status

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" ? parseInt(value) || 1 : value, // Ensure quantity is a number
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        body: JSON.stringify({ ...formData, productId }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to place order. Please try again.");
      }

      alert("Order placed! A confirmation email will be sent.");
      
      // Reset form state
      setFormData({ name: "", email: "", phone: "", address: "", quantity: 1 });
    } catch (error ) {
      if( error instanceof Error) {
        console.error("Error submitting order:", error.message);
        alert(error.message);
      }else{
        console.error("Unexpected error:", error);
        alert("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 mb-40">
      <h1 className="text-3xl font-bold text-center mb-6">Place Your Order</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto border rounded-lg shadow-lg p-6">
        <label htmlFor="name" className="block text-gray-400 font-semibold">
          Full Name:
        </label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          required
          className="w-full border rounded-md p-2 mt-1 mb-3"
        />

        <label htmlFor="email" className="block text-gray-400 font-semibold">
          Email Address:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          required
          className="w-full border rounded-md p-2 mt-1 mb-3"
        />

        <label htmlFor="phone" className="block text-gray-400 font-semibold">
          Phone Number:
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          onChange={handleChange}
          value={formData.phone}
          required
          className="w-full border rounded-md p-2 mt-1 mb-3"
        />

        <label htmlFor="address" className="block text-gray-400 font-semibold">
          Delivery Address:
        </label>
        <input
          id="address"
          type="text"
          name="address"
          onChange={handleChange}
          value={formData.address} // Added missing value
          required
          className="w-full border rounded-md p-2 mt-1 mb-3"
        />

        <label htmlFor="quantity" className="block text-gray-400 font-semibold">
          Quantity:
        </label>
        <input
          id="quantity"
          type="number"
          name="quantity"
          onChange={handleChange}
          value={formData.quantity} // Ensure number handling
          required
          min="1"
          className="w-full border rounded-md p-2 mt-1 mb-3"
        />

        <button
          type="submit"
          disabled={loading} // Disable button while submitting
          className={`w-full py-2 rounded-lg transition cursor-pointer ${
            loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700 text-white"
          }`}
        >
          {loading ? "Processing..." : "Confirm Order"}
        </button>
      </form>
    </div>
  );
}
