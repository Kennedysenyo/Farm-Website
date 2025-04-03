import { db } from "@/db";
import { products } from "@/db/schema";
import { eq } from "drizzle-orm";



export const ProductData =  async({id} : {id: number | null}) => {

  if(id === null) {
    return (
      <>
        <td className="p-2 order">null</td>
      </>
    )
  }

  const productData = await db.select().from(products).where(eq(products.id, id))


  return (
  <>
    <td className="p-2 border">{productData[0].name}</td>
  </>
  )
}