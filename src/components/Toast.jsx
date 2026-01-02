import { CheckCircle, XCircle, Info, X } from "lucide-react";
import { useEffect, useState } from "react";

const icons = {
  success: <CheckCircle className="text-emerald-400" size={18} />,
  error: <XCircle className="text-rose-400" size={18} />,
  info: <Info className="text-indigo-400" size={18} />,
};

const barColor = {
  success: "bg-emerald-500",
  error: "bg-rose-500",
  info: "bg-indigo-500",
};

function Toast({ type = "info", message, duration = 3000, onClose }) {
  const [progress, setProgress] = useState(100);


  useEffect(() => {
    const interval = 30;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => Math.max(prev - step, 0));
    }, interval);

    return () => clearInterval(timer);
  }, [duration]);


  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timeout);
  }, [duration, onClose]);

  return (
    <div className="relative w-80 overflow-hidden bg-slate-900/90 backdrop-blur border border-white/10 rounded-xl shadow-xl text-sm text-white animate-slide-in">

      {/* CONTENT */}
      <div className="flex items-center gap-3 px-4 py-3">
        {icons[type]}
        <span className="flex-1">{message}</span>
        <button onClick={onClose}>
          <X size={16} className="text-slate-400 hover:text-white" />
        </button>
      </div>

      {/* PROGRESS BAR */}
      <div className="h-1 w-full bg-white/5">
        <div
          className={`h-full ${barColor[type]} transition-all`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default Toast;
