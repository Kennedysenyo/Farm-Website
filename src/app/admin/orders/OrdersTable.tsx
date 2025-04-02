
import { OrdersType } from "@/types/types";
import { ProductData } from "./ProductData";
import { Suspense } from "react";

interface OrdersTypeProps {
  orders: OrdersType[];
}

export const OrdersTable = ({orders}: OrdersTypeProps) => {

  const orderElements = orders.map(order => (
    <tr key={order.id} className="border-b hover:bg-gray-100">
      <Suspense fallback={<p>Loading...</p>}>
        <ProductData id={order.productId} />
      </Suspense>
      <td className="p-4">{order.quantity}</td>
      <td className="p-4">{order.phone}</td>
      <td className="p-4">{order.status}</td>
    </tr>
  ))

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden pt-12 pl-16">
      <table className="w-full text-left border-collapse">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="p-4">Images</th>
            <th className="p-4">Product Name</th>
            <th className="p-4">Quantity</th>
            <th className="p-4">Phone</th>
            <th className="p-4">Progress</th>
          </tr>
        </thead>
        <tbody>
         {orderElements}
        </tbody>
      </table>

    </div>
  )
}