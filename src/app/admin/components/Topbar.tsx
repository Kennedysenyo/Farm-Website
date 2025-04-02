import { FiSearch, FiUser } from "react-icons/fi";

export const Topbar = () => {
  return (
    <div className="bg-white shadow p-4 flex justify-between items-center absolute top-0.8 left-16 right-0">
      {/* Search Bar */}
      <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-lg">
        <FiSearch className="text-gray-600" />
        <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none w-full" />
      </div>

      {/* Admin Profile */}
      <button className="flex items-center space-x-2">
        <FiUser size={20} className="text-gray-600" />
        <span className="hidden sm:inline">Admin</span>
      </button>
    </div>
  );
}
