import Link from "next/link";

const products = [
  { id: 1, name: "Mango Seedling", price: "$10", image: "/images/mango.jpg" },
  { id: 2, name: "Pawpaw Seedling", price: "$8", image: "/images/pawpaw.jpg" },
  { id: 3, name: "Coconut Seedling", price: "$12", image: "/images/coconut.jpg" },
  { id: 4, name: "Pear Seedling", price: "$9", image: "/images/pear.jpg" },
];

export default function ProductsPage() {

  const productElements = products.map((product) => (
    <Link 
      key={product.id}
      href={`/products/${product.id}`} 
      className="border rounded-lg shadow-lg p-4"
    >
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover rounded-md"
        />
        <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
        <p className="text-green-600 font-bold">{product.price}</p>
        <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition cursor-pointer">
          Order Now
        </button>
      </div>
    </Link>
  ))

  return(
    <div className="container mx-auto px-4 py-10 mb-40">
      <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productElements}
      </div>
    </div>
  );
}

