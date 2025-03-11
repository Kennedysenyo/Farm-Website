import Link from "next/link";

const services = [
  { name: "Farmland Acquisition", description: "We help you secure the best farmland for your needs.", icon: "🌱" },
  { name: "Farming Consultancy", description: "Expert guidance to optimize your farm operations.", icon: "📊" },
  { name: "Seedlings & Fertilizers", description: "Quality seedlings and fertilizers to boost your yield.", icon: "🌾" },
  { name: "Marketing Support", description: "Helping farmers sell their produce effectively.", icon: "📢" },
];

export default function Services() {

  const serviceElements = services.map((service, index) => (
    <div
      key={index}
      className="bg-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
    >
      <div className="text-4xl mb-4">
        {service.icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">
        {service.name}
      </h3>
      <p className="text-gray-700">
        {service.description}
      </p>
    </div>
  ))

  return(
    <section  className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {serviceElements}
        </div>
        <Link
          href="/services"
          className="mt-6 primary-color-button"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
