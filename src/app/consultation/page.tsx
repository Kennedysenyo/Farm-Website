"use client"
import { ConsultationFormState, bookConsultation } from "../../actions/consultations";
import { useActionState } from "react"

export default function ConsultationPage() {

  const initialState: ConsultationFormState = {
    error: {},
    success: false,
  }

  const [state, formAction, isPending] = useActionState(
    bookConsultation, 
    initialState
  )

  return(
    <div className={`max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-8 mb-50`}>
    <h2 className="text-2xl font-semibold text-center mb-4">Book a Consultation</h2>

  {
    state.success ? 
    (
    <p className="text-green-600 text-center">Your consultation request has been sent!</p>
    ) : (
      <form action={formAction} className="space-y-4 ">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Full Name</label>
          <input 
            id="name"
            type="text" 
            name="name"
            className="w-full p-2 border border-green-600 rounded"
          />
          {
            state?.error.name && <p className="text-red-500">{state?.error.name}</p>
          }
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input 
            id="email"
            type="email" 
            name="email"
            className="w-full p-2 border border-green-600 rounded"
          />
          {
            state?.error.email && <p className="text-red-500">{state.error.email}</p>
          }
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium">Preferred Date & Time</label>
          <input 
            id="date"
            type="datetime-local" 
            name="date"
            className="w-full p-2 border border-green-600 rounded"
          />
          {
            state?.error.date && <p className="text-red-500">{state.error.date}</p>
          }
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full p-2 border border-green-600 rounded"
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 cursor-pointer"
        >
          {isPending ? "Booking..." : "Book Consultation"}
        </button>
      </form>
    )
  }
  </div>
  )
}