import { db } from "@/db";
import { orders } from "@/db/schema";
import { OrdersType } from "@/types/types"
import { OrdersTable } from "./OrdersTable";
import { notFound } from "next/navigation";

export default async function OrdersPage() {
    const allOrders = await db.select().from(orders)
    console.log(allOrders)

    if(!allOrders) {
        notFound()
    }

    return (
        <div className="container mx-auto px-12 py-20">
            <h1 className="text-3xl font-bold text-center mb-6">Manage Orders</h1>
            <OrdersTable orders={allOrders} />
        </div>
    )
}