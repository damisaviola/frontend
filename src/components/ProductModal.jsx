export default function ProductModal({
  open,
  onClose,
  form,
  setForm,
  onSubmit,
}) {
  if (!open) return null;

  return (
    <>
      {/* OVERLAY */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl p-6 animate-scaleIn">
          <h2 className="text-lg font-semibold mb-4">
            Tambah Produk
          </h2>

          <form onSubmit={onSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Nama Produk"
              value={form.nama}
              onChange={(e) =>
                setForm({ ...form, nama: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 outline-none"
            />

            <input
              type="number"
              placeholder="Harga"
              value={form.harga}
              onChange={(e) =>
                setForm({ ...form, harga: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 outline-none"
            />

            <input
              type="number"
              placeholder="Stok"
              value={form.stok}
              onChange={(e) =>
                setForm({ ...form, stok: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 outline-none"
            />

            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                Batal
              </button>

              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white transition"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
