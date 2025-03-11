import Link from "next/link";

export default function About() {
  return (
    <section className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/images/about-farm.png"
            alt="Farm Overview"
            className="rounded-2xl shadow-lg"
          />
        </div>
        
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Our Farm & Consultancy
          </h2>
          <p className="text-lg mb-6 leading-relaxed">
            We are dedicated to providing top-quality seedlings, expert farming consultancy,
            and farmland solutions to help you succeed in agriculture. Whether you're looking
            to start a farm, secure farmland, or improve your yield, we've got you covered.
          </p>
          <Link
            href="/about"
            className="primary-color-button"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}