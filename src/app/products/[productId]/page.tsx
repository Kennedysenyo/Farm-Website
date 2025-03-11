import Link from "next/link";
import { notFound } from "next/navigation";

const products = [
  { id: 1, name: "Mango Seedling", price: "$10", image: "/images/mango.jpg", description: "High-quality mango seedlings." },
  { id: 2, name: "Pawpaw Seedling", price: "$8", image: "/images/pawpaw.jpg", description: "Healthy and fresh pawpaw seedlings." },
  { id: 3, name: "Coconut Seedling", price: "$12", image: "/images/coconut.jpg", description: "Premium coconut seedlings for farming." },
  { id: 4, name: "Pear Seedling", price: "$9", image: "/images/pear.jpg", description: "Top-grade pear seedlings." },
];


export default async function ProductDetailsPage({ 
  params,
 }: {
  params: Promise<{productId: string}>
}) {

  const id = (await params).productId;
  const product = products.find(product => product.id === parseInt(id))

  if(!product) return notFound()

  return(
    <div className="container mx-auto px-4 py-10 mb-40">
      <div className="max-w-3xl mx-auto border rounded-lg shadow-lg p-6">
        <img 
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-md"
        />
        <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
        <p className="text-lg text-gray-700 mt-2">{product.description}</p>
        <p className="text-green-600 font-bold text-2xl mt-3">{product.price}</p>
        <Link 
          href={`/order?product=${product.id}`} 
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