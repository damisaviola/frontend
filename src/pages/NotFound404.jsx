import { Link } from "react-router-dom";
import { AlertTriangle, Home, LayoutDashboard } from "lucide-react";
import { useEffect } from "react";


function NotFound() {
useEffect(() => { 
      document.title = "404 Not Found";
    } , []);
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <div className="w-full max-w-md bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 text-center">

        <div className="w-20 h-20 mx-auto rounded-full bg-rose-500/10 flex items-center justify-center mb-6">
          <AlertTriangle className="text-rose-400" size={36} />
        </div>

        <h1 className="text-5xl font-extrabold text-white mb-2">
          404
        </h1>
        <p className="text-xl font-semibold text-white mb-2">
          Page not found
        </p>
        <p className="text-slate-400 text-sm mb-8">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <Link
            to="/dashboard"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition"
          >
            <LayoutDashboard size={18} />
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
