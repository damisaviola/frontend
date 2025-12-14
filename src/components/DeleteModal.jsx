function DeleteModal({ show, onClose, onConfirm }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-xl shadow-xl p-6 w-full max-w-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-2">
          Konfirmasi Hapus
        </h3>

        <p className="text-sm text-slate-600 mb-6">
          Data yang dihapus tidak dapat dikembalikan. Yakin ingin melanjutkan?
        </p>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-slate-300 hover:bg-slate-400 text-slate-800 text-sm font-semibold"
          >
            Batal
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
