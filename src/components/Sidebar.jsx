import {
  HiOutlineHome,
  HiOutlineCube,
  HiOutlineCash,
  HiOutlineChartBar,
  HiOutlineCog
} from "react-icons/hi";

export default function Sidebar({
  activeMenu,
  setActiveMenu,
  sidebarOpen,
  setSidebarOpen,
}) {
  const menus = [
    { key: "dashboard", label: "Dashboard", icon: HiOutlineHome },
    { key: "produk", label: "Produk", icon: HiOutlineCube },
    { key: "transaksi", label: "Transaksi", icon: HiOutlineCash },
    { key: "laporan", label: "Laporan", icon: HiOutlineChartBar },
    { key: "setting", label: "Pengaturan", icon: HiOutlineCog },
  ];

  return (
    <aside
      className={`fixed inset-y-0 z-40 w-64 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl
      border-r border-slate-200 dark:border-slate-800
      transition-transform duration-300
      ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      md:translate-x-0`}
    >
      <div className="p-6 text-xl font-semibold">
        kios<span className="text-indigo-500">.app</span>
      </div>

      <nav className="space-y-1 px-3">
        {menus.map((item) => {
          const Icon = item.icon;
          const active = activeMenu === item.key;

          return (
            <button
              key={item.key}
              onClick={() => {
                setActiveMenu(item.key);
                setSidebarOpen(false);
              }}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition
                ${
                  active
                    ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                    : "hover:bg-slate-200/60 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-300"
                }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
