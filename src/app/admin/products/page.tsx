import Link from "next/link";
import { db } from "@/db";
import { products } from "@/db/schema";
import { ProductTable } from "./ProductsTable"


export default async function Products() {
       const allProducts = await db.select().from(products)
       
        const productElements = allProducts.map(product => (
            <div
                key={product.id}
                className="border border-green-600 rounded-lg shadow-lg p-4"
            >
                <div>
                    <img 
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-40 object-cover rounded-md"
                    />
                    <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
                    <p className="text-green-600 font-bold">Ghc{product.price}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <Link
                        href={`/admin/products/${product.id}`}
                        className="mt-3 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
                    >
                        Edit
                    </Link>
                    <button className=" mt-3 bg-red-600 rounded-lg py-2 hover:bg-red-700">
                        Delete
                    </button>
                    </div>
                </div>
            </div>
        ))


    return (
        <div className="container mx-auto px-12 py-20">
            <h1 className="text-3xl font-bold text-center mb-6">Manage Products</h1>

           <div className="flex justify-end">
           <Link href="/admin/products/add" className="rounded-lg p-4 font-bold bg-green-600 hover:bg-green-700 text-white py-3 my-5">Add Product</Link>

           </div>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {productElements}
            </div> */}
            <ProductTable theProducts={allProducts} />
        </div>
    )
}