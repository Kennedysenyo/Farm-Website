import nodemailer from "nodemailer";

export const sendOrderEmail = async (to: string, orderDetails: any) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", // You can use other email services (e.g., SMTP)
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email app password
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
