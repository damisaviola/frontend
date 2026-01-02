import { useEffect, useState } from "react";
import { Globe } from "lucide-react";

import PLATFORMS from "../data/osintPlatforms";
import OsintCard from "../components/OsintCard";
import OsintSearchBar from "../components/OsintSearchBar";
import OsintLoading from "../components/OsintLoading";

function Osint() {
  const [username, setUsername] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  const search = async () => {
    if (!username) return;

    const clean = username.replace(/[^a-zA-Z0-9._]/g, "");

    setLoading(true);
    setSearched(true);
    setResults([]);
    setProgress(0);

    const generated = [];

    for (let i = 0; i < PLATFORMS.length; i++) {
      const p = PLATFORMS[i];

      await new Promise((r) => setTimeout(r, 120));

      generated.push({
        platform: p.name,
        url: p.url.replace("{username}", clean),
      });

      setProgress(Math.round(((i + 1) / PLATFORMS.length) * 100));
    }

    setResults(generated);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-20 text-white">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm mb-4">
            <Globe size={14} />
            Public OSINT Tool
          </div>
          <h1 className="text-4xl font-extrabold mb-3">
            Username OSINT Search
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Search for public accounts across various platforms using a single
          </p>
        </div>

        {/* SEARCH */}
        <OsintSearchBar
          username={username}
          setUsername={setUsername}
          onSearch={search}
          loading={loading}
        />

        {/* LOADING */}
        {loading && (
          <>
            <OsintLoading />

            {/* PROGRESS BAR */}
            <div className="max-w-xl mx-auto mt-6">
              <p className="text-center text-slate-400 text-sm mb-2">
                Scanning platforms… {progress}%
              </p>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </>
        )}

        {/* EMPTY STATE */}
        {!loading && searched && results.length === 0 && (
          <p className="text-center text-slate-500 mt-10">
            Tidak ditemukan akun publik dengan username tersebut.
          </p>
        )}

        {/* RESULTS */}
        {!loading && results.length > 0 && (
          <>
            <p className="text-center text-xs text-slate-400 mb-6 mt-10">
              ⚠️ Results are generated links. Account availability is not verified.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((item, i) => (
                <OsintCard
                  key={i}
                  platform={item.platform}
                  url={item.url}
                />
              ))}
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default Osint;
