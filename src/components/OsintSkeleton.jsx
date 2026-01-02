function OsintSkeleton() {
  return (
    <div className="animate-pulse">

      {/* INFO TEXT */}
      <div className="flex justify-center mb-6">
        <div className="h-4 w-40 rounded bg-slate-700/60" />
      </div>

      {/* SKELETON GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur p-5"
          >
            {/* SHIMMER */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_1.8s_infinite]" />

            {/* TITLE */}
            <div className="h-5 w-24 rounded bg-slate-700/60 mb-4" />

            {/* URL */}
            <div className="h-3 w-full rounded bg-slate-700/50 mb-2" />
            <div className="h-3 w-3/4 rounded bg-slate-700/40" />

            {/* FOOTER */}
            <div className="mt-4 h-3 w-20 rounded bg-slate-700/40" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OsintSkeleton;
