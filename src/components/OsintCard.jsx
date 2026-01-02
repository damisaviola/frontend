import {
  ExternalLink,
  HelpCircle,
  Github,
  Gitlab,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
  Gamepad2,
  Music,
  Twitch,
  Send,
  Globe,
  Pin,
  FileText,
  Layers,
} from "lucide-react";

/* mapping icon + accent color */
const PLATFORM_META = {
  GitHub: { icon: Github, color: "text-slate-300" },
  GitLab: { icon: Gitlab, color: "text-orange-400" },
  "Twitter / X": { icon: Twitter, color: "text-sky-400" },
  Instagram: { icon: Instagram, color: "text-pink-400" },
  Facebook: { icon: Facebook, color: "text-blue-400" },
  YouTube: { icon: Youtube, color: "text-red-500" },

  Reddit: { icon: MessageCircle, color: "text-orange-500" },
  Steam: { icon: Gamepad2, color: "text-slate-300" },
  Spotify: { icon: Music, color: "text-green-400" },
  Twitch: { icon: Twitch, color: "text-purple-400" },
  Telegram: { icon: Send, color: "text-sky-400" },

  Pinterest: { icon: Pin, color: "text-red-400" },
  Medium: { icon: FileText, color: "text-slate-300" },
  StackOverflow: { icon: Layers, color: "text-orange-400" },

  default: { icon: Globe, color: "text-indigo-400" },
};

function OsintCard({ platform, url }) {
  const meta = PLATFORM_META[platform] || PLATFORM_META.default;
  const Icon = meta.icon;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10"
    >
      {/* glow */}
      <div className="absolute inset-0 rounded-2xl bg-indigo-500/10 opacity-0 group-hover:opacity-100 blur-xl transition" />

      <div className="relative z-10">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center">
              <Icon size={20} className={meta.color} />
            </div>
            <h3 className="font-semibold text-white text-sm">
              {platform}
            </h3>
          </div>

          <ExternalLink
            size={16}
            className="text-slate-500 group-hover:text-indigo-400 transition"
          />
        </div>

        {/* URL */}
        <p className="text-[11px] text-slate-400 break-all mb-3">
          {url}
        </p>

        {/* STATUS */}
        <div className="flex items-center gap-1 text-[10px] text-yellow-400/90">
          <HelpCircle size={12} />
          Possible account (not verified)
        </div>
      </div>
    </a>
  );
}

export default OsintCard;
