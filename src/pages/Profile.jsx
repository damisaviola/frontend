import { useState } from "react";
import {
  Eye,
  EyeOff,
  User,
  Lock,
  Mail,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

function Profile() {
  const [profile, setProfile] = useState({
    name: "userfriendly",
    email: "userfriendly@example.com",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();

    if (profile.password !== profile.confirmPassword) {
      alert("Password tidak sama");
      return;
    }

    alert("Profile updated successfully ✨");

    setProfile({
      ...profile,
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-12">
      <div className="max-w-2xl mx-auto bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8">

        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="relative w-20 h-20 mx-auto rounded-full bg-indigo-500/20 flex items-center justify-center mb-4">
            <User className="text-indigo-400" size={34} />
            <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-1">
              <CheckCircle size={14} />
            </span>
          </div>

          <h2 className="text-3xl font-bold text-white">My Profile</h2>
          <p className="text-slate-400 text-sm mt-1">
            Manage your personal information & security
          </p>
        </div>

        {/* ACCOUNT INFO */}
        <div className="mb-8">
          <h3 className="text-sm uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
            <User size={14} /> Account Information
          </h3>

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={profile.name}
              onChange={handleChange}
              className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />

            <div className="relative">
              <input
                type="email"
                value={profile.email}
                readOnly
                className="w-full rounded-xl bg-slate-800/50 border border-slate-700 px-4 py-3 pl-11 text-slate-400 cursor-not-allowed"
              />
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                size={18}
              />
            </div>

            <div className="flex gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck size={14} className="text-indigo-400" />
                Role: Admin
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle size={14} className="text-emerald-400" />
                Status: Active
              </span>
            </div>
          </div>
        </div>


        <div className="mb-8">
          <h3 className="text-sm uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
            <Lock size={14} /> Security
          </h3>

          <div className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="New Password"
                value={profile.password}
                onChange={handleChange}
                className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 pr-12 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-400 transition"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm New Password"
              value={profile.confirmPassword}
              onChange={handleChange}
              className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <p className="text-xs text-slate-500">
              Use at least 8 characters with a mix of letters & numbers.
            </p>
          </div>
        </div>

      
        <button
          onClick={submit}
          className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default Profile;
