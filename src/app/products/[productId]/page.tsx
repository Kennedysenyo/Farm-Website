import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { products } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function ProductDetailsPage({ 
  params,
 }: {
  params: Promise<{productId: string}>
}) {
  const id = (await params).productId;

  const product = await db.select().from(products).where(eq(products.id, Number(id)))

  if(!product) return notFound()

  return(
    <div className="container mx-auto px-4 py-10 mb-40">
      <div className="max-w-3xl mx-auto border rounded-lg shadow-lg p-6">
        <img 
          src={product[0].imageUrl}
          alt={product[0].name}
          className="w-full h-64 object-cover rounded-md"
        />
        <h1 className="text-3xl font-bold mt-4">{product[0].name}</h1>
        <p className="text-lg text-gray-700 mt-2">{product[0].description}</p>
        <p className="text-green-600 font-bold text-2xl mt-3">Ghc{product[0].price}</p>
        <Link 
          href={`/order?product=${product[0].id}`} 
        >
          <button 
            className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition cursor-pointer"
          >
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
 }