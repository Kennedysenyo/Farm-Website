"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiMenu, FiBox, FiShoppingCart, FiUsers, FiSettings, FiGrid } from "react-icons/fi";
import Link from "next/link";

const menuItems = [
  { name: "Dashboard", href: "/admin", icon: FiGrid },
  { name: "Products", href: "/admin/products", icon: FiBox },
  { name: "Orders", href: "/admin/orders", icon: FiShoppingCart },
  { name: "Consultations", href: "/admin/consultations", icon: FiUsers },
  { name: "Settings", href: "/admin/settings", icon: FiSettings },
];

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className={`fixed top-16 left-0 z-50 bg-green-800 text-white h-fit transition-all ${isCollapsed ? "w-16" : "w-64"} duration-300`}>
      <div className="flex items-center justify-between p-4">
        <h1 className={`text-lg font-bold ${isCollapsed && "hidden"}`}>Admin Panel</h1>
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="p-2 focus:outline-none">
          <FiMenu size={24} />
        </button>
      </div>

      <nav className="mt-4">
        {menuItems.map(({ name, href, icon: Icon }) => (
          <Link href={href} key={name} className="flex items-center p-3 hover:bg-green-700">
            <Icon size={20} />
            {!isCollapsed && <span className="ml-3">{name}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
}
