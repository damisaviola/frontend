export default function ProductTable({ products }) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 overflow-x-auto">
      <h3 className="mb-6 font-medium">
        Daftar Produk
      </h3>

      <table className="min-w-[600px] w-full text-sm">
        <thead className="text-slate-500 dark:text-slate-400 border-b dark:border-slate-800">
          <tr>
            <th className="text-left py-3">Nama</th>
            <th className="text-left py-3">Harga</th>
            <th className="text-left py-3">Stok</th>
          </tr>
        </thead>
        <tbody className="text-slate-700 dark:text-slate-200">
          {products.length === 0 && (
            <tr>
              <td colSpan="3" className="py-6 text-center text-slate-400">
                Belum ada produk
              </td>
            </tr>
          )}

          {products.map((p) => (
            <tr
              key={p.id}
              className="border-b dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/40 transition"
            >
              <td className="py-4">{p.nama}</td>
              <td>Rp {Number(p.harga).toLocaleString("id-ID")}</td>
              <td>{p.stok}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
