import { useState } from "react";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-9 h-9 rounded-full bg-indigo-500 text-white flex items-center justify-center"
      >
        A
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setOpen(false)}
          />

          <div className="absolute right-0 top-12 z-20 w-44 bg-white dark:bg-slate-900
            border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg animate-dropdown">

            <div className="px-4 py-3 border-b dark:border-slate-800">
              <p className="text-sm font-medium">Admin</p>
              <p className="text-xs text-slate-500">admin@kios.app</p>
            </div>

            <button className="w-full px-4 py-3 text-left hover:bg-slate-100 dark:hover:bg-slate-800">
              Profile
            </button>

            <button
              onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/login";
              }}
              className="w-full px-4 py-3 text-left text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10"
            >
              Logout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
