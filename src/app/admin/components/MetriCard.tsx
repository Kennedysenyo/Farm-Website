import { IconType } from "react-icons";

interface MetriCardProps {
  title: string;
  count: number | string;
  icon: IconType;
  color: string;
}

export const MetriCard = ({title, count, icon: Icon, color}: MetriCardProps) => {
  return (
    <div className={`p-6 rounded-lg shadow flex items-center ${color}`}>
      <Icon size={30} />
      <div className="text-lg">{title}</div>
      <p className="text-2xl font-bold">{count}</p>
    </div>
  )
}