import { db } from "@/db";
import { products } from "@/db/schema";
import { eq } from "drizzle-orm";



export const ProductData =  async({id} : {id: number | null}) => {
 
  console.log(id)

  if(id === null) {
    return (
      <>
        <td className="p-4">
          <img 
            src="" 
            alt="null"
            width={70}
            height={70}
            className="rounded border border-green-600 object-cover" 
          />
        </td>
        <td className="p-4">null</td>
      </>
    )
  }

  const productData = await db.select().from(products).where(eq(products.id, id))

  console.log(productData)

  return (
  <>
    <td className="p-4">
      <img 
        src={productData[0].imageUrl} 
        alt={productData[0].name} 
        width={70}
        height={70}
        className="rounded border border-green-600 object-cover"
      />
    </td>
    <td className="p-4">{productData[0].name}</td>
  </>
  )
}