"use client"
import { FiEdit, FiTrash } from "react-icons/fi";
import Link from "next/link"
import { deleteProduct } from "../actions/products";
import { useOptimistic } from "react";
import { ProductsType } from "@/types/types";

  interface EditTableProps {
    theProducts: ProductsType[];
  }
  


export const ProductTable = ({theProducts}: EditTableProps) => {


  const [optimisticProducts, setOptimisticProducts] = useOptimistic(theProducts, (currentProducts, productId) => {
    return currentProducts.filter(product => (product.id !== productId))
  })


  const removeProductById = async(productId: number) => {
    setOptimisticProducts(productId)
    await deleteProduct(productId);
  }

  const productElements = optimisticProducts.map((product) => (
    <tr key={product.id} className="border-b hover:bg-gray-100">
      <td className="p-4">
        <img src={`${product.imageUrl}`} alt={product.name}  width={50} height={50} className="rounded" />
      </td>
      <td className="p-4">{product.name}</td>
      <td className="p-4">{product.price}</td>
      <td className="p-4">{product.description}</td>
      <td className="p-4 flex space-x-3">
        <Link href={`/admin/products/edit/${product.id}`} className="text-blue-600 text-center hover:underline"><FiEdit /></Link>
        <form action={removeProductById.bind(null, product.id)}>
          <button type="submit" className="text-red-600 hover:underline"><FiTrash /></button>
        </form>
      </td>
    </tr>
  ))

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden pt-12 pl-16">
      <table className="w-full text-left border-collapse">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="p-4">Image</th>
            <th className="p-4">Name</th>
            <th className="p-4">Price</th>
            <th className="p-4">Description</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {productElements}
        </tbody>
      </table>
    </div>
  )
}