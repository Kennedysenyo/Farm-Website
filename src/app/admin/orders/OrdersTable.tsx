
import { OrdersType } from "@/types/types";
import { ProductData } from "./ProductData";
import Link from "next/link";


interface OrdersTypeProps {
  orders: OrdersType[];
}

export const OrdersTable = ({orders}: OrdersTypeProps) => {

  const orderElements = orders.map(order => (
    <tr key={order.id} className="border-b hover:bg-gray-100">

      <ProductData id={order.productId} />

      <td className="p-2 border">{order.quantity}</td>
      <td className="p-2 border">{order.phone}</td>
      <td className="p-2 border">{order.status}</td>
      <td className="p-2 border">
        <Link href={`/admin/orders/${order.id}`} className="text-blue-600">View</Link>
      </td>
    </tr>
  ))

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden pt-12 pl-16">
      <table className="w-full text-left border-collapse">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="p-2 border">Product Name</th>
            <th className="p-2 border">Quantity</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
         {orderElements}
        </tbody>
      </table>

    </div>
  )
}