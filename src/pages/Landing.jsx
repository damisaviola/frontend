import { Link } from "react-router-dom";
import { useEffect } from "react";
import OsintSkeleton from "../components/OsintSkeleton";
import {
  Search,
  ShieldCheck,
  Globe,
  Eye,
  Database,
  Code,
  ArrowRight,
  UserPlus,
  LogIn,
} from "lucide-react";

function Landing() {
  useEffect(() => {
    document.title = "OSINT Username Intelligence";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">

  
      <nav className="sticky top-0 z-50 bg-slate-900/70 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-wide flex items-center gap-2">
            <Globe className="text-indigo-400" size={20} />
            <span className="text-indigo-400">OSINT</span>Scan
          </h1>

          <div className="flex gap-3">
            <Link
              to="/login"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 transition text-sm"
            >
              <LogIn size={16} />
              Login
            </Link>
            <Link
              to="/register"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition text-sm font-semibold"
            >
              <UserPlus size={16} />
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <div className="animate-fadeUp">
          <span className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium">
            <ShieldCheck size={14} />
            Ethical OSINT Tool
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Track Digital Footprints <br />
            <span className="text-indigo-400">By Username</span>
          </h2>

          <p className="text-slate-400 max-w-xl mb-10">
            Discover public accounts across social platforms using a single
            username. Built for OSINT research, security awareness, and digital
            investigation.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/osint"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold transition"
            >
              Start OSINT Scan
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
            >
              <LogIn size={18} />
              Dashboard
            </Link>
          </div>
        </div>

        {/* PREVIEW CARD + SKELETON */}
        <div
          className="relative animate-fadeUp"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="absolute -top-16 -left-16 w-52 h-52 bg-indigo-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-16 -right-16 w-52 h-52 bg-purple-500/20 rounded-full blur-3xl"></div>

          <div className="relative bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Eye className="text-indigo-400" />
              Example Scan Preview
            </h3>

            {/* SKELETON PREVIEW */}
            <OsintSkeleton />

            <p className="text-xs text-slate-500 mt-4">
              Preview only — real scanning happens in OSINT page
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h3 className="text-3xl font-bold text-center mb-16">
          Core Capabilities
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Search />,
              title: "Username Enumeration",
              desc: "Generate possible public profile links automatically",
            },
            {
              icon: <ShieldCheck />,
              title: "Ethical OSINT",
              desc: "Public data only — no scraping, no tracking",
            },
            {
              icon: <Code />,
              title: "Developer Ready",
              desc: "Built with React, Tailwind & scalable structure",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-slate-900/60 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-slate-900/80 transition animate-fadeUp"
              style={{ animationDelay: `${0.2 * i}s` }}
            >
              <div className="text-indigo-400 mb-4">{item.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="max-w-4xl mx-auto px-6 pb-24 text-center">
        <div className="bg-slate-900/70 backdrop-blur border border-white/10 rounded-2xl p-8 text-sm text-slate-400 animate-fadeUp">
          ⚠️ This tool generates possible public profile links.
          <br />
          Account availability and ownership are not verified.
          Use responsibly and ethically.
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-6 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} OSINTScan — Ethical Username Intelligence
      </footer>
    </div>
  );
}

export default Landing;
