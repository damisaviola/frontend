import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import ProductTable from "../components/ProductTable";
import ProductModal from "../components/ProductModal";

export default function Produk() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [theme, setTheme] = useState("dark");
  const [modalOpen, setModalOpen] = useState(false);

  const [form, setForm] = useState({
    nama: "",
    harga: "",
    stok: "",
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nama || !form.harga || !form.stok) return;

    setProducts([
      ...products,
      {
        id: Date.now(),
        ...form,
      },
    ]);

    setForm({ nama: "", harga: "", stok: "" });
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen font-poppins bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-100">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="md:ml-64">
        <TopBar
          theme={theme}
          setTheme={setTheme}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="p-4 md:p-8 space-y-6">

          {/* HEADER TABLE */}
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold">
              Produk
            </h1>

            <button
              onClick={() => setModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white transition"
            >
              + Tambah Produk
            </button>
          </div>

          {/* TABLE */}
          <ProductTable products={products} />

        </main>
      </div>

      {/* MODAL */}
      <ProductModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        form={form}
        setForm={setForm}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
