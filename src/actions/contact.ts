"use server"
import { sendContactEmail } from "@/lib/mail"

export type ContactErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export type ContactFormState = {
  errors: ContactErrors;
  success: boolean;
}


export const sendContact = async(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> => {

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  const errors: ContactErrors = {};

  if(!name) errors.name = "Name is required";
  if(!email) errors.email = "Email is required";
  if(!subject) errors.subject = "Subject is required";
  if(!message) errors.message = "Message is required";
    
 

  if(Object.keys(errors).length > 0) {
    return { errors, success: false,  };
  }

 try {
  await sendContactEmail(name, email, subject, message)
  return {errors: {}, success: true}
 }catch (error) {
  console.error(error);
  return {
    errors: {},
    success: false,
  };
 }


}