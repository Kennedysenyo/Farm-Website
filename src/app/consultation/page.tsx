"use client";
import { useState } from "react";

export default function ConsultationPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/consultation", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      setForm({name: "", email: "", date: "", message: ""});
    }else {
      alert("Error booking consultation.");
    }
  };


  return (
    <div className={`max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-8 ${success ? 'mb-100': 'mb-40'} text-gray-900`}>
      <h2 className="text-2xl font-semibold text-center mb-4">Book a Consultation</h2>

    {success ? (
      <p className="text-green-600 text-center">Your consultation request has been sent!</p>
    ) : (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">Full Name</label>
        <input 
          id="name"
          type="text" 
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">Email</label>
        <input 
          id="email"
          type="email" 
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium">Preferred Date & Time</label>
        <input 
          id="date"
          type="datetime-local" 
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="w-full p-2 border rounded"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 cursor-pointer"
      >
        {loading ? "Booking...": "Book Consultation"}
      </button>
    </form>
    )}
    </div>
  ) 
}