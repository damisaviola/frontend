import { Globe, Radar } from "lucide-react";

function OsintLoading() {
  return (
    <div className="flex flex-col items-center py-16 gap-8">

      {/* CORE SCANNER */}
      <div className="relative">

        {/* OUTER GLOW */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/30 to-purple-500/30 blur-2xl animate-pulse" />

        {/* ROTATING RING */}
        <div className="absolute inset-0 rounded-full border border-indigo-500/40 animate-spin-slow" />

        {/* CORE */}
        <div className="relative w-20 h-20 rounded-full bg-slate-900/80 backdrop-blur border border-white/10 flex items-center justify-center shadow-xl">
          <Globe className="text-indigo-400 animate-spin" size={32} />
        </div>
      </div>

      {/* STATUS TEXT */}
      <div className="text-center space-y-1">
        <p className="text-slate-300 text-sm tracking-wide">
          scanning digital footprint
        </p>
        <p className="text-xs text-slate-500 animate-pulse">
          collecting public signals…
        </p>
      </div>

      {/* SKELETON RESULTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mt-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur p-5"
          >
            {/* SHIMMER */}
            <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* FAKE CONTENT */}
            <div className="flex items-center justify-between mb-4">
              <div className="h-4 w-24 rounded bg-slate-700/70" />
              <Radar className="text-slate-600" size={16} />
            </div>
            <div className="h-3 w-full rounded bg-slate-700/50 mb-2" />
            <div className="h-3 w-2/3 rounded bg-slate-700/40" />
          </div>
        ))}
      </div>

    </div>
  );
}

export default OsintLoading;
