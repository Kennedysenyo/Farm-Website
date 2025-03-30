"use client";
import {useState } from "react";
import {Menu, X} from "lucide-react";
import Link from "next/link";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      {/* Mobile sidebar Toggle button */}
      <button className="lg:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded-md"
      onClick={() => setIsOpen(true)}
      >
       <Menu size={24} />
      </button>

      {/* Sidbar */}
      <aside className={`fixed top-3 left-0 h-full w-64 bg-gray-900 text-white p-5 transition-transform ${isOpen ? 'tranlate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:w-62 lg:static lg:flex lg:flex-col z-50`}>
        {/* Close Button (Mobile Only) */}
        <button
          className="lg:hidden absolute top-4 right-4 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>

        <h2 className="text-xl font-bold mb:6">Admin Panel</h2>

        <nav className="space-y-4">
          <Link href="/admin/dashboard" className="block p-2 hover:bg-gray-700 rounded">
            Dashboard
          </Link>
          <Link href="/admin/consultations" className="block p-2 hover:bg-gray-700 rounded">
            Manage Consultations
          </Link>
          <Link href="/admin/products" className="block p-2 hover:bg-gray-700 rounded">
            Manage Products
          </Link>
          <Link href="/admin/orders" className="block p-2 hover:bg-gray-700 rounded">
            Manage Orders
          </Link>
          <Link href="/admin/blogs" className="block p-2 hover:bg-gray-700 rounded">
            Manage Blogs
          </Link>
        </nav>
      </aside>
      {/* Overlay Effect */}
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50 lg:hidden" onClick={() => setIsOpen(false)}>

        </div>
      )}
    </>
  )
}