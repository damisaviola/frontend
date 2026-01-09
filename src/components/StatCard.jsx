export default function StatCard({ title, value, warn }) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
      <p className="text-sm text-slate-600 dark:text-slate-400">
        {title}
      </p>
      <h2 className={`text-3xl mt-2 ${warn ? "text-amber-500" : ""}`}>
        {value}
      </h2>
    </div>
  );
}
