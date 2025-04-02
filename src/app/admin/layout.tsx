import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content - Ensure it fills the screen */}
      <div className="flex-1 flex flex-col min-h-screen">
        <Topbar />

        {/* Main content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
