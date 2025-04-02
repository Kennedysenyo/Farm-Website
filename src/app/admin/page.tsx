import { MetriCard } from "./components/MetriCard"
import { FiBox, FiShoppingCart, FiUsers, FiDollarSign } from "react-icons/fi";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-21 pl-14">
      <MetriCard title="Products" count={25} icon={FiBox} color="bg-blue-500" />
      <MetriCard title="Orders" count={50} icon={FiShoppingCart} color="bg-green-500" />
      <MetriCard title="Consultations" count={10} icon={FiUsers} color="bg-yellow-500" />
      <MetriCard title="Revenue" count={"$5,000"} icon={FiDollarSign} color="bg-red-500" />
    </div>
  )
}