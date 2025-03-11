import Link from "next/link";

export default function Footer() {
  return(
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold mb-3">Contact Us</h3>
          <p>Email: info@farmbusiness.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Location: City, Country</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="footer-links-hover">Home</Link></li>
            <li><Link href="/products" className="footer-links-hover">Products</Link></li>
            <li><Link href="/services" className="footer-links-hover">Services</Link></li>
            <li><Link href="/blog" className="footer-links-hover">Blog</Link></li>
            <li><Link href="/contact" className="footer-links-hover">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link href="#" className="footer-links-hover">Facebook</Link>
            <Link href="#" className="footer-links-hover">Twitter</Link>
            <Link href="#" className="footer-links-hover">Instagram</Link>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} Farm Business. All rights reserved.</p>
      </div>
    </footer>
  );
}