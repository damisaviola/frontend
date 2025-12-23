import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  LogIn,
  UserPlus,
  ShieldCheck,
  LayoutDashboard,
  Sparkles,
  Database,
  Code,
  Server,
  Users,
  Gauge,
  ArrowRight,
} from "lucide-react";

function Landing() {
  useEffect(() => { 
      document.title = "Jogja Software Developer";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">

   
      <nav className="sticky top-0 z-50 bg-slate-900/70 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-wide flex items-center gap-2">
            <LayoutDashboard className="text-indigo-400" size={20} />
            <span className="text-indigo-400">App</span>
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
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium">
            <Sparkles size={14} />
            Modern CRUD Platform
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Build & Manage Users <br />
            <span className="text-indigo-400">With Confidence</span>
          </h2>

          <p className="text-slate-400 max-w-xl mb-10">
            A modern user management system built using React and CodeIgniter 3.
            Designed with clean UI, secure access, and real-world scalability in mind.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold transition"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
            >
              <LogIn size={18} />
              Login
            </Link>
          </div>
        </div>

        {/* HERO CARD */}
        <div className="relative">
          <div className="absolute -top-16 -left-16 w-52 h-52 bg-indigo-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-16 -right-16 w-52 h-52 bg-purple-500/20 rounded-full blur-3xl"></div>

          <div className="relative bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <ShieldCheck className="text-indigo-400" />
              Why This App?
            </h3>

            <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex items-center gap-2">
                <Gauge size={16} /> Fast & responsive UI
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck size={16} /> Secure protected routes
              </li>
              <li className="flex items-center gap-2">
                <Sparkles size={16} /> Clean & consistent design
              </li>
              <li className="flex items-center gap-2">
                <Database size={16} /> Production-ready CRUD
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { icon: <Users />, value: "100+", label: "Users Managed" },
            { icon: <Code />, value: "CRUD", label: "Core Operations" },
            { icon: <Sparkles />, value: "Modern", label: "UI Experience" },
            { icon: <LayoutDashboard />, value: "1", label: "Dashboard" },
          ].map((item, i) => (
            <div key={i}>
              <div className="flex justify-center mb-3 text-indigo-400">
                {item.icon}
              </div>
              <h3 className="text-3xl font-bold">{item.value}</h3>
              <p className="text-slate-400 text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h3 className="text-3xl font-bold text-center mb-16">
          What You Get
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <ShieldCheck />,
              title: "Authentication",
              desc: "Login, register & protected dashboard access",
            },
            {
              icon: <Database />,
              title: "CRUD System",
              desc: "Create, update & delete data efficiently",
            },
            {
              icon: <Sparkles />,
              title: "Modern Interface",
              desc: "Dark mode, glass effect & clean layout",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-slate-900/60 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-slate-900/80 transition"
            >
              <div className="text-indigo-400 mb-4">{item.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h3 className="text-3xl font-bold text-center mb-14">
          Technology Stack
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: <Code />, label: "React" },
            { icon: <Sparkles />, label: "Tailwind CSS" },
            { icon: <Server />, label: "CodeIgniter 3" },
            { icon: <Database />, label: "REST API" },
          ].map((tech, i) => (
            <div
              key={i}
              className="bg-slate-900/60 border border-white/10 rounded-xl py-6 flex flex-col items-center gap-3 text-slate-300 text-sm font-semibold"
            >
              <div className="text-indigo-400">{tech.icon}</div>
              {tech.label}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="bg-slate-900/70 backdrop-blur border border-white/10 rounded-2xl p-12 shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            Ready to use the dashboard?
          </h3>
          <p className="text-slate-400 mb-8">
            Start managing users with a modern and secure system.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 px-10 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold transition"
          >
            Create Account
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-6 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} CRUDApp — React & CodeIgniter 3
      </footer>
    </div>
  );
}

export default Landing;
