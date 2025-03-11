

export default function EmailSubscription() {
  return(
    <section className="py-16 bg-green-700 text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Our Offers & Tips</h2>
        <p className="text-lg mb-6">
          Subscribe to receive the latest farm insights, special discounts, and more.
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input 
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-3 text-white border-2 border-green-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-none"
            required
          />
          <button 
            type="submit"
            className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}