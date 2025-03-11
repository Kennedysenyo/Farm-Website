import Link from "next/link";

const products = [
  {name: "Mango Seedlings", image: "/images/mango.jpg", link: "/products/1"},
  {name: "Pawpaw Seedlings", image: "/images/pawpaw.jpg", link: "/products/2"},
  {name: "Coconut Seedlings", image: "/images/coconut.jpg", link: "/products/3"},
  {name: "Pear Seedlings", image: "/images/pear.jpg", link: "/products/4"},
];

export default function Products() {

  const productElements = products.map((product, index) => (
    <Link 
      key={index}
      href={product.link}
      className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
    >
     <img
      src={product.image} 
      alt={product.name}
      className="w-full h-40 object-cover"
     /> 
     <div className="p-4">
      <h3 className="text-lg font-semibold">{product.name}</h3>
     </div>
    </Link>
  ));

  return(
    <section className="py-16 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {productElements}
        </div>
        <Link 
          href="/products"
          className="mt-6 primary-color-button"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
}