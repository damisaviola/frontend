export default function TransactionTable() {
  const data = [
    { kode: "#TRX001", tanggal: "08/01/2026", total: "Rp 250.000", status: "Sukses" },
    { kode: "#TRX002", tanggal: "08/01/2026", total: "Rp 180.000", status: "Sukses" },
    { kode: "#TRX003", tanggal: "08/01/2026", total: "Rp 90.000", status: "Pending" },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 overflow-x-auto">
      <h3 className="mb-6 font-medium">
        Transaksi Terakhir
      </h3>

      <table className="min-w-[600px] w-full text-sm">
        <thead className="text-slate-500 border-b dark:border-slate-800">
          <tr>
            <th className="text-left py-3">Tanggal</th>
            <th className="text-left py-3">Kode</th>
            <th className="text-left py-3">Total</th>
            <th className="text-left py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((trx, i) => (
            <tr
              key={i}
              className="border-b dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/40 transition"
            >
              <td className="py-4">{trx.tanggal}</td>
              <td>{trx.kode}</td>
              <td>{trx.total}</td>
              <td className={trx.status === "Sukses" ? "text-emerald-500" : "text-amber-500"}>
                {trx.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
