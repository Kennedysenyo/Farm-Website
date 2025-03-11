import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Products from "@/components/home/Products";
import Services from "@/components/home/Services";
import Updates from "@/components/home/Updates";
import Testimonials from "@/components/home/Testimonials";
import EmailSubscription from "@/components/home/EmailSubscription";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Services />
      <Updates />
      <Testimonials />
      <EmailSubscription />
    </>
  );
}
