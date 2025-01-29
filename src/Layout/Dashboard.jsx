import { useState } from "react";
import { Outlet } from "react-router";
import { Home, User, Cog } from "lucide-react"; // Use lucide-react for consistent icons
import gradientbg from "../assets/gradientBg.png";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Profile", href: "/profile", icon: User },
    { name: "Settings", href: "/settings", icon: Cog },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside
        className={`bg-[#b0cf23] shadow-lg w-64 fixed h-full overflow-y-auto transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold text-black">Dashboard</h2>
        </div>

        <nav className="mt-6 space-y-2">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center px-6 py-3 text-white hover:bg-blue-100 hover:text-[#222222] transition-all rounded-lg"
            >
              <item.icon className="w-5 h-5 text-black" />
              <span className="mx-3 font-medium">{item.name}</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="md:ml-64 w-full">
        <TopNavigation onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />

        <main
          className="p-6 bg-cover bg-center h-[92vh]"
          style={{
            background: "linear-gradient(rgb(241, 244, 253) 0px, #D7E5A6 100%)",
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function TopNavigation({ onMenuToggle }) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10 h-[8vh]">
      <div className="flex items-center justify-between px-6 py-4">
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={onMenuToggle}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="flex-grow relative mx-4">
          <input
            type="search"
            placeholder="Search"
            className="w-full bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="mx-2 text-gray-700">John Doe</span>
        </div>
      </div>
    </header>
  );
}

function StatCard({ title, value, trend }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
      <div className="text-green-500 flex items-center mt-2">
        <span>{trend}</span>
      </div>
    </div>
  );
}

function ChartSection({ title }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="h-64 bg-gray-50 flex items-center justify-center text-gray-400">
        Chart Placeholder
      </div>
    </div>
  );
}

function RecentActivity() {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      <ul className="space-y-4">
        <li className="text-gray-600">Sample Activity 1</li>
        <li className="text-gray-600">Sample Activity 2</li>
      </ul>
    </div>
  );
}

function RecentOrders() {
  const orders = [
    {
      id: 1,
      number: "#1234",
      date: "2025-01-28",
      status: "Completed",
      total: "$120.00",
    },
    // Add more orders
  ];

  return (
    <div className="mt-6 bg-white rounded-lg shadow hover:shadow-md transition">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="pb-3">Order</th>
                <th className="pb-3">Date</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.number}</td>
                  <td>{order.date}</td>
                  <td className="text-green-600">{order.status}</td>
                  <td>{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
