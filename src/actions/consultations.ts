"use server"
import { db } from "@/db";
import { consultations } from "@/db/schema";
import { sendConsultationEmail } from "@/lib/mail";

export type ConsultationFormErrors = {
  name?: string;
  email?: string;
  date?: string;
}

export type ConsultationFormState = {
  error: ConsultationFormErrors;
  success: boolean;
}


export const bookConsultation = async(prevState: ConsultationFormState, formData: FormData): Promise<ConsultationFormState> => {
  
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const date = formData.get("date") as string;
  const message = formData.get("message") as string;

  const errors: ConsultationFormErrors = {};

  if (!name) {
    errors.name = "Name is required";
  }
  if (!email) {
    errors.email = "Email is required";
  }
  if (!date) {
    errors.date = "Date is required";
  }

  if(Object.keys(errors).length > 0) {
    return { error: errors, success: false, };
  }

  const bookedConsultation = await db.insert(consultations).values({name, email, date: new Date(date), message}).returning();

  if (!bookedConsultation) return {error: {}, success: false};

  await sendConsultationEmail(name, email, date);
  console.log("Booked consultation successfully!!");

  return {error: {}, success: true};
}
