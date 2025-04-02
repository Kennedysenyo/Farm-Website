"use client";
import { useActionState } from "react";
import { sendContact, ContactFormState } from "../../actions/contact";

export default function ContactPage() {

  const initialState: ContactFormState = {
    errors: {},
    success: false,
  }

  const [ state, formAction, isPending] = useActionState(sendContact, initialState)

  return (
    <div className="max-w-2xl mx-auto py-12 text-gray-900 mb-40">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <form action={formAction} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-2 border border-green-600 rounded"
          />
          {
            state?.errors.name && <p className="text-red-500">{state.errors.name}</p>
          }
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-2 border border-green-600 rounded"
          />
          {
            state?.errors.email && <p className="text-red-500">{state.errors.email}</p>
          }
        </div>
        <div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-2 border rounded"
          />
          {
            state?.errors.subject && <p className="text-red-500">{state.errors.subject}</p>
          }
        </div>
        <div>
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-2 border border-green-600 rounded"
          rows={4}
        ></textarea>
        {
          state?.errors.message && <p className="text-red-500">{state.errors.message}</p>
        }
        </div>
        <button type="submit" disabled={isPending} className="w-full bg-green-600 text-white p-2 rounded cursor-pointer">
          {isPending ? "Sending..." : "Send Message"}
        </button>
        {state.success && <p className="text-green-600 text-sm">Message sent successfully!</p>}
      </form>
    </div>
  )
}