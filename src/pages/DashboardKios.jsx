import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/TopBar";
import StatCard from "../components/StatCard";
import TransactionTable from "../components/TransactionTable";

export default function DashboardKios() {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);


  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      className="
        min-h-screen
        bg-slate-100 dark:bg-slate-950
        text-slate-800 dark:text-slate-100
      "
    >
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="md:ml-64">
        <Topbar
          theme={theme}
          setTheme={setTheme}
          setSidebarOpen={setSidebarOpen}
        />

        {/* CONTENT */}
        <main className="p-4 md:p-8 space-y-8">
          {/* STAT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="Revenue" value="Rp 12.5jt" />
            <StatCard title="Transaksi" value="48" />
            <StatCard title="Produk Aktif" value="124" />
            <StatCard title="Stok Warning" value="6" warn />
          </div>

          {/* TABLE */}
          <TransactionTable />
        </main>
      </div>
    </div>
  );
}
