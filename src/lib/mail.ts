import nodemailer from "nodemailer";

interface Options {
  from: string;
  to: string[];
  subject: string;
  html: string;
}


export const sendOrderEmail = async (to: string, orderDetails: any) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", 
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS, 
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: "Order Confirmation",
    html: `
      <h2>Thank you for your order!</h2>
      <p>Your order details:</p>
      <ul>
        <li><strong>Product:</strong> ${orderDetails.name}</li>
        <li><strong>Quantity:</strong> ${orderDetails.quantity}</li>
        <li><strong>Delivery Address:</strong> ${orderDetails.address}</li>
      </ul>
      <p>We will process your order and update you soon.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Order confirmation email sent to:", to);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};


export const sendConsultationEmail = async(name: string, email: string, date: string) => {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    }
  })

  const mailOptions: Options = {
    from: process.env.EMAIL_USER!,
    to: [email, process.env.RECEIVER_EMAIL!],
    subject: "Consultation Booking Confirmation",
    html: `<p>Hello ${name},<p>
            <p>Your consultation is scheduled for <strong>${new Date(date).toLocaleString()}</strong>.</p>
            <p>We will get back to you soon.</p>
            <p>Thank you!</p>
            `
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error(error)
  }
}

export const sendContactEmail = async(name: string, email: string, subject: string, message: string,) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: `New Contact Form Message: ${subject}`,
    text: `From ${name}(${email})\n\nMesage:\n${message}`
  }

  
  await transporter.sendMail(mailOptions)
}