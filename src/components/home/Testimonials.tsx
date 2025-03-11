

const testimonials = [
  {
    name: "Bismark Addo",
    feedback: "Their seedlings are top-notch! My farm has never looked better.",
    image: "/images/user1.jpg",
  },
  {
    name: "Jane Korkor",
    feedback: "The consultation service helped me secure my farmland with ease!",
    image: "/images/user2.jpg",
  },
  {
    name: "Michael Brown",
    feedback: "Excellent customer service and high-quality products. Highly recommended!",
    image: "/images/user3.jpg",
  },
];

export default function Testimonials() {

  const testimonialElements = testimonials.map((testimonial, index) => (
    <div
      key={index}
      className="bg-gray-100 p-6 rounded-2xl shadow-lg"
    >
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
      />
      <p className="text-lg italic">"{testimonial.feedback}"</p>
      <h4 className="mt-4 font-semibold">{testimonial.name}</h4>
    </div>
  ));

  return(
    <section className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialElements}
        </div>
      </div>
    </section>
  )
}
