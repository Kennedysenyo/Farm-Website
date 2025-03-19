"use client"

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  {name: "Home", href: "/"},
  {name: "Products", href: "/products"},
  {name: "Services", href: "/services"},
  {name: "Updates", href: "/updates"},
  {name: "About", href: "/about"},
  {name: "Contact", href: "/contact"},
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navElements = navItems.map(item => (
    <Link 
      key={item.href} 
      href={item.href}
      className={`hover:text-yellow-400 ${isOpen ? "block text-white" : ""}`}
    >
      {item.name}
    </Link>
  ))

  
  return(
    <header className="bg-green-700 text-white py-4 px-6 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          FarmBiz
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
         {navElements}
        </nav>

        {/* CTA Button */}
        <Link 
          href="/consultation" className="hidden md:inline-block consultation-button"
        >
          Get Consultation
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(prev => !prev)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

    {/* Mobile Navigation */}
    {isOpen && (
      <nav className="md:hidden bg-green-800 p-4 space-y-4">
        {navElements}
        <Link 
          href="/consultation" 
          className="block consultation-button"
        > 
          Get Consultation
        </Link>
      </nav>
    )}
    </header>
  )
}