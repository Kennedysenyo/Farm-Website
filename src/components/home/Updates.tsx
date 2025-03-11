import Link from "next/link";

const updates = [
  { title: "New Batch of Mango Seedlings Available!", date: "March 10, 2025" },
  { title: "Tips for Increasing Farm Yield", date: "March 8, 2025" },
  { title: "Farmland Available for Lease – Contact Us!", date: "March 5, 2025" },
  { title: "Exclusive Discount on Coconut Seedlings", date: "March 3, 2025" },
];

export default function Updates() {

  const updateElemets = updates.map((update, index) => (
    <div 
      key={index}
      className="border-l-4 border-green-700 pl-4"
    >
      <h3 className="text-xl font-semibold">
        {update.title}
      </h3>
      <p className="text-gray-600 text-sm">
        {update.date}
      </p>
    </div>
  ));

  return(
    <section className="py-16 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Live Updates</h2>
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {updateElemets}
          </div>
        </div>
        <Link
          href="/blog"
          className="mt-6 primary-color-button"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}