import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  PlusCircle,
  LogOut,
  Pencil,
  Trash2,
} from "lucide-react";

import DeleteModal from "../components/DeleteModal";
import LogoutModal from "../components/LogoutModal";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../services/api";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);

  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const [showLogout, setShowLogout] = useState(false);

  const navigate = useNavigate();

   useEffect(() => { 
      document.title = "Dashboard";
    } , []);

  const loadData = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    editId ? await updateUser(editId, form) : await createUser(form);

    setForm({ name: "", email: "" });
    setEditId(null);
    setLoading(false);
    loadData();
  };

  const editUser = (user) => {
    setEditId(user.id);
    setForm({ name: user.name, email: user.email });
  };

  const confirmDelete = async () => {
    await deleteUser(deleteId);
    setShowDelete(false);
    setDeleteId(null);
    loadData();
  };

  const confirmLogout = () => {
    localStorage.removeItem("isLogin");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-12">

      <div className="max-w-7xl mx-auto space-y-10">

        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">
              Dashboard
            </h1>
            <p className="text-slate-400 text-sm">
              Manage your users efficiently
            </p>
          </div>

          <button
            onClick={() => setShowLogout(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-500/90 hover:bg-rose-500 text-white text-sm font-semibold transition"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/70 backdrop-blur border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <Users className="text-indigo-400" />
              <div>
                <p className="text-sm text-slate-400">Total Users</p>
                <h3 className="text-2xl font-bold text-white">
                  {users.length}
                </h3>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/70 backdrop-blur border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <PlusCircle className="text-emerald-400" />
              <div>
                <p className="text-sm text-slate-400">Mode</p>
                <h3 className="text-2xl font-bold text-white">
                  {editId ? "Editing" : "Adding"}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-slate-900/70 backdrop-blur border border-white/10 rounded-2xl p-6">
          <form
            onSubmit={submit}
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 outline-none"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 outline-none"
              value={form.email}
              onChange={handleChange}
              required
            />

            <div className="md:col-span-2 flex gap-2">
              <button
                type="submit"
                disabled={loading}
                className={`flex-1 rounded-xl px-4 py-3 font-semibold transition
                  ${
                    editId
                      ? "bg-amber-500 hover:bg-amber-400"
                      : "bg-indigo-600 hover:bg-indigo-500"
                  }
                  ${loading ? "opacity-50 cursor-not-allowed" : ""}
                `}
              >
                {editId ? "Update User" : "Add User"}
              </button>

              {editId && (
                <button
                  type="button"
                  onClick={() => {
                    setEditId(null);
                    setForm({ name: "", email: "" });
                  }}
                  className="flex-1 rounded-xl px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white transition"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* TABLE */}
        <div className="bg-slate-900/70 backdrop-blur border border-white/10 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-800 text-slate-300">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan="3" className="p-6 text-center text-slate-500">
                    No data available
                  </td>
                </tr>
              ) : (
                users.map((u) => (
                  <tr
                    key={u.id}
                    className="border-t border-white/5 hover:bg-slate-800/60 transition"
                  >
                    <td className="p-4 text-white font-medium">
                      {u.name}
                    </td>
                    <td className="p-4 text-slate-400">
                      {u.email}
                    </td>
                    <td className="p-4 flex justify-center gap-2">
                      <button
                        onClick={() => editUser(u)}
                        className="p-2 rounded-full bg-emerald-500/90 hover:bg-emerald-500 text-white"
                      >
                        <Pencil size={14} />
                      </button>
                      <button
                        onClick={() => {
                          setDeleteId(u.id);
                          setShowDelete(true);
                        }}
                        className="p-2 rounded-full bg-rose-500/90 hover:bg-rose-500 text-white"
                      >
                        <Trash2 size={14} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODALS */}
      <DeleteModal
        show={showDelete}
        onClose={() => setShowDelete(false)}
        onConfirm={confirmDelete}
      />

      <LogoutModal
        show={showLogout}
        onClose={() => setShowLogout(false)}
        onConfirm={confirmLogout}
      />
    </div>
  );
}

export default Dashboard;
