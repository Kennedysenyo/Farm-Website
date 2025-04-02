import Link from "next/link";

export default function Hero() {
  return(
    <section 
      className="relative bg-cover bg-center h-screen flex items-center text-white"
      style={{backgroundImage: "url('/images/mangotree.jpg')"}}
    
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent"></div>
      {/* <div className="absolute inset-0 bg-block/5"></div> */} 

      <div className="container mx-auto px-6 text-center relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Growing the Future, One Seedling at a Time
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto drop-shadow-lg">
          Quality seedlings, expert consultancy, and farmland solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/products" 
            className="bg-yellow-500 text-green-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            Order Now
          </Link>
          <Link 
            href="/consultation" 
            className="bg-opacity-20 border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition"
          >
            Get Consultation
          </Link>
        </div>
      </div>
    </section>
  )
}