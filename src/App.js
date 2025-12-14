import { useEffect, useState } from "react";
import DeleteModal from "./components/DeleteModal";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} from "./services/api";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const loadData = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const submit = async (e) => {
    e.preventDefault();

    if (editId) {
      await updateUser(editId, { name, email });
    } else {
      await createUser({ name, email });
    }

    setName("");
    setEmail("");
    setEditId(null);
    loadData();
  };

  const editUser = (user) => {
    setEditId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  const confirmDelete = async () => {
    await deleteUser(deleteId);
    setShowDelete(false);
    setDeleteId(null);
    loadData();
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8">

        {/* HEADER */}
        <div className="mb-8 border-b pb-4">
          <h2 className="text-3xl font-bold text-slate-800">
            CRUD React + CodeIgniter 3
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Simple user management
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={submit}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
        >
          <input
            type="text"
            placeholder="Full Name"
            className="border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            className="border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <div className="md:col-span-2 flex gap-2">
            <button
              type="submit"
              className={`flex-1 rounded-lg px-4 py-2 text-white font-semibold transition
                ${editId
                  ? "bg-amber-500 hover:bg-amber-600"
                  : "bg-blue-600 hover:bg-blue-700"
                }`}
            >
              {editId ? "Update Data" : "Add Data"}
            </button>

            {editId && (
              <button
                type="button"
                onClick={() => {
                  setEditId(null);
                  setName("");
                  setEmail("");
                }}
                className="flex-1 rounded-lg px-4 py-2 bg-slate-400 hover:bg-slate-500 text-white font-semibold transition"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-slate-100 text-slate-700">
                <th className="p-3 font-semibold text-left">Name</th>
                <th className="p-3 font-semibold text-left">Email</th>
                <th className="p-3 font-semibold text-center">Action</th>
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
                users.map(u => (
                  <tr
                    key={u.id}
                    className="border-t hover:bg-slate-50 transition"
                  >
                    <td className="p-3 font-medium text-slate-700">
                      {u.name}
                    </td>
                    <td className="p-3 text-slate-600">
                      {u.email}
                    </td>
                    <td className="p-3 text-center flex justify-center gap-2">
                      <button
                        onClick={() => editUser(u)}
                        className="px-4 py-1 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          setDeleteId(u.id);
                          setShowDelete(true);
                        }}
                        className="px-4 py-1 rounded-full bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold"
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
      <DeleteModal
        show={showDelete}
        onClose={() => setShowDelete(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
}

export default App;
