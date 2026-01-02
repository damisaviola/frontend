import { Search, AtSign } from "lucide-react";

function OsintSearchBar({ username, setUsername, onSearch }) {
  return (
    <div className="relative mb-16">

      {/* GLOW */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-2xl opacity-70"></div>

      {/* CARD */}
      <div className="relative bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">

        {/* LABEL */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
          <AtSign size={14} className="text-indigo-400" />
          Username reconnaissance
        </div>

        {/* INPUT + BUTTON */}
        <div className="flex flex-col md:flex-row gap-4">
          
          {/* INPUT */}
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
              @
            </span>
            <input
              value={username}
              onChange={(e) =>
                setUsername(e.target.value.replace(/[^a-zA-Z0-9._]/g, ""))
              }
              placeholder="damimaturbongs"
              className="w-full rounded-2xl bg-slate-800/80 border border-slate-700 pl-10 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>

          {/* BUTTON */}
          <button
            onClick={onSearch}
            className="group flex items-center justify-center gap-2 px-8 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 font-semibold transition-all duration-300 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50"
          >
            <Search size={18} className="group-hover:scale-110 transition" />
            Scan
          </button>
        </div>

        {/* HINT */}
        <p className="mt-3 text-xs text-slate-500">
          Supports GitHub, Instagram, X, TikTok, Steam, Spotify, and more.
        </p>
      </div>
    </div>
  );
}

export default OsintSearchBar;
