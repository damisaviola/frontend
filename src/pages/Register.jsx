import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const passwordMatch =
    form.password &&
    form.confirmPassword &&
    form.password === form.confirmPassword;

  const submit = (e) => {
    e.preventDefault();

    if (!passwordMatch) return;

    console.log(form);
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <div className="w-full max-w-md bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Create account ✨
          </h1>
          <p className="text-slate-400 text-sm mt-2">
            Start your journey with us
          </p>
        </div>

        {/* Form */}
        <form onSubmit={submit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={form.email}
            onChange={handleChange}
            required
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 pr-12 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={form.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              className={`w-full rounded-xl bg-slate-800 border px-4 py-3 pr-12 text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition
                ${
                  form.confirmPassword
                    ? passwordMatch
                      ? "border-emerald-500 focus:ring-emerald-500"
                      : "border-rose-500 focus:ring-rose-500"
                    : "border-slate-700 focus:ring-indigo-500"
                }`}
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition"
            >
              {showConfirm ? "🙈" : "👁️"}
            </button>
          </div>

          {/* Password Match Info */}
          {form.confirmPassword && (
            <p
              className={`text-xs ${
                passwordMatch ? "text-emerald-400" : "text-rose-400"
              }`}
            >
              {passwordMatch
                ? "Password cocok"
                : "Password tidak cocok"}
            </p>
          )}

          <button
            type="submit"
            disabled={!passwordMatch}
            className={`w-full mt-2 rounded-xl py-3 font-semibold transition-all
              ${
                passwordMatch
                  ? "bg-indigo-600 hover:bg-indigo-500 text-white"
                  : "bg-slate-700 text-slate-400 cursor-not-allowed"
              }`}
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-slate-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-400 hover:text-indigo-300"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
