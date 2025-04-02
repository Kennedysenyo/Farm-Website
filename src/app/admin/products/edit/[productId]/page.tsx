import { getProduct,} from "../../../actions/products";
import EditProductForm from "./EditProductForm"
import { notFound } from "next/navigation";
import { ProductsType } from "@/types/types"

export default async function EditProduct({params}: {params: Promise<{productId: string}>}) {

  const { productId } = await params;
  const product: ProductsType = await getProduct(parseInt(productId));
  
  if(!product) {
    notFound()
  }
 
 
  return (
    <div className="container mx-auto px-4 py-10 mb-40">
      <EditProductForm product={product} />
    </div>
  );
}
