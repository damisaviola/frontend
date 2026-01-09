import ProfileDropdown from "./ProfileDropdown";

export default function TopBar({
  theme,
  setTheme,
  setSidebarOpen,
}) {
  return (
    <header className="h-16 sticky top-0 z-20 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl
      border-b border-slate-200 dark:border-slate-800 px-4 md:px-8 flex items-center justify-between">

      <div className="flex items-center gap-3">
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800"
        >
          ☰
        </button>

        <h1 className="text-base md:text-lg font-medium">
          Dashboard Kios
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="px-3 py-2 rounded-lg text-sm bg-slate-200 dark:bg-slate-800"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>

        <ProfileDropdown />
      </div>
    </header>
  );
}
