import React, { useEffect, useState } from "react";
import { getAllPrompts } from "../services/promptsApi";

export default function Prompts() {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    async function loadPrompts() {
      const data = await getAllPrompts();
      setPrompts(data);
      setLoading(false);
    }
    loadPrompts();
  }, []);

  if (loading) {
    return <p className="p-6">Loading prompts...</p>;
  }

  // 🔹 Get unique categories from sheet
  const categories = [
    "All",
    ...new Set(prompts.map((p) => p.Category || "Others")),
  ];

  // 🔹 Filter logic (search + category)
  const filteredPrompts = prompts.filter((p) => {
    const matchesCategory =
      activeCategory === "All" || p.Category === activeCategory;

    const matchesSearch = p["Prompt Title"]
      ?.toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // 🔹 Group filtered prompts by category
  const grouped = filteredPrompts.reduce((acc, p) => {
    const cat = p.Category || "Others";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(p);
    return acc;
  }, {});

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Prompt Library</h1>

      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search prompt by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />

      {/* 🏷 Category Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 rounded border cursor-pointer ${
              activeCategory === cat
                ? "bg-black text-white"
                : "bg-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 📦 Prompts */}
      {Object.keys(grouped).length === 0 && (
        <p>No prompts found.</p>
      )}

      {Object.keys(grouped).map((category) => (
        <section key={category} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            {category} Prompts
          </h2>

          <div className="space-y-4">
            {grouped[category].map((prompt) => (
              <div
                key={prompt["Prompt ID"]}
                className="border p-4 rounded"
              >
                <h3 className="font-semibold text-lg">
                  {prompt["Prompt Title"]}
                </h3>

                {prompt.Difficulty && (
                  <p className="text-sm text-gray-600">
                    Difficulty: {prompt.Difficulty}
                  </p>
                )}

                <pre className="bg-gray-100 p-3 rounded text-sm mt-2 whitespace-pre-wrap">
                  {prompt["Prompt Text"]}
                </pre>

                <button
                  onClick={() =>
                    navigator.clipboard.writeText(
                      prompt["Prompt Text"]
                    )
                  }
                  className="mt-3 px-4 py-1 bg-black text-white rounded cursor-pointer hover:bg-gray-800"
                >
                  Copy Prompt
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
