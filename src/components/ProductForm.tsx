"use client";
import { useState } from "react";
import ImageUploader from "./ImageUploader";

export default function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const productData = { ...product, price: Number(product.price) };

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });

    setLoading(false);

    if (res.ok) {
      alert("Product added successfully!");
      setProduct({
        name: "",
        description: "",
        price: "",
        imageUrl: "",
      });
    } else {
      alert("Error adding product!");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md max-w-lg text-gray-900">
      <h2 className="text-xl font-semibold">Add a New Product</h2>

      <div>
        <label htmlFor="name" className="block text-sm font-medium">Product Name</label>
        <input 
          id="name" 
          name="name"
          type="text" 
          value={product.name} 
          onChange={handleChange} 
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium">Description</label>
        <textarea 
          id="description" 
          name="description"
          value={product.description} 
          onChange={handleChange} 
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label htmlFor="price" className="block text-sm font-medium">Price</label>
        <input 
          id="price" 
          name="price"
          type="text" 
          value={product.price} 
          onChange={handleChange} 
          required
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Upload Image */}
      <div>
        <label htmlFor="imageUrl" className="block text-sm font-medium">Product Image</label>
        <ImageUploader onUpload={(url) => setProduct(prev => ({ ...prev, imageUrl: url }))} />
        {/* {product.imageUrl && <img src={product.imageUrl} alt="uploaded" className="w-32 h-32 object-cover mt-2" />} */}
      </div>

      <button type="submit" disabled={loading} className="px-4 py-2 bg-green-600 text-white rounded cursor-pointer">
        {loading ? "Saving..." : "Add Product"}
      </button>
    </form>
  );
}
