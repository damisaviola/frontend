function LogoutModal({ show, onClose, onConfirm }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-slate-900 border border-white/10 rounded-2xl shadow-2xl p-6 w-full max-w-sm">
        <h3 className="text-lg font-bold text-white mb-2">
          Logout Confirmation
        </h3>

        <p className="text-sm text-slate-400 mb-6">
          Are you sure you want to logout?
        </p>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold transition"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-400 text-white text-sm font-semibold transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;
