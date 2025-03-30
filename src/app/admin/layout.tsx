import { Sidebar } from "@/components/Sidebar";

export default function AdminLayout({
  children,
} : {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* main content */}
      <main className="flex-1 p6 lg:ml-72">
        {children}
      </main>
    </div>
  )
}