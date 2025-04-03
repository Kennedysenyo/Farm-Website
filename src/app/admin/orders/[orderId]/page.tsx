import { getProduct } from "@/actions/product";
import { getOrderById } from "../../actions/orders";
import Order from "./Order"


export default async function OrderDetailsPage({params} : {params: Promise<{orderId: string}>}) {

  const orderId = (await params).orderId;
  const order = await getOrderById(parseInt(orderId))
  const product = await getProduct(order.productId)

  return (
    <Order order={order} product={product} />
  )
}