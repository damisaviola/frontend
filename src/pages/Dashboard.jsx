import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const loadData = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const logout = () => {
  setShowLogout(true);
};

const confirmLogout = () => {
  localStorage.removeItem("isLogin");
  navigate("/login");
};


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (editId) {
      await updateUser(editId, form);
    } else {
      await createUser(form);
    }

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

const [showLogout, setShowLogout] = useState(false);


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-10">
      <div className="max-w-6xl mx-auto bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 border-b border-white/10 pb-4">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Dashboard
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              User management panel
            </p>
          </div>

                    <button
            onClick={logout}
            className="mt-4 md:mt-0 px-4 py-2 rounded-xl bg-rose-500/90 hover:bg-rose-500 text-white text-sm font-semibold transition"
            >
            Logout
            </button>
        </div>

        {/* FORM */}
        <form
          onSubmit={submit}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={form.email}
            onChange={handleChange}
            required
          />

          <div className="md:col-span-2 flex gap-2">
            <button
              type="submit"
              disabled={loading}
              className={`flex-1 rounded-xl px-4 py-3 text-white font-semibold transition
                ${
                  editId
                    ? "bg-amber-500 hover:bg-amber-400"
                    : "bg-indigo-600 hover:bg-indigo-500"
                }
                ${loading ? "opacity-50 cursor-not-allowed" : ""}
              `}
            >
              {editId ? "Update Data" : "Add Data"}
            </button>

            {editId && (
              <button
                type="button"
                onClick={() => {
                  setEditId(null);
                  setForm({ name: "", email: "" });
                }}
                className="flex-1 rounded-xl px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold transition"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-white/10 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-800 text-slate-300">
                <th className="p-4 text-left font-semibold">Name</th>
                <th className="p-4 text-left font-semibold">Email</th>
                <th className="p-4 text-center font-semibold">Action</th>
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
                        className="px-4 py-1 rounded-full bg-emerald-500/90 hover:bg-emerald-500 text-white text-xs font-semibold transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          setDeleteId(u.id);
                          setShowDelete(true);
                        }}
                        className="px-4 py-1 rounded-full bg-rose-500/90 hover:bg-rose-500 text-white text-xs font-semibold transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* DELETE MODAL */}
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
