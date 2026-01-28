import React, { useEffect, useState } from "react";


export default function Tools() {
  const [tools, setTools] = useState([]); // MUST be array
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [activeTool, setActiveTool] = useState(null);




  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/1KFMcJMHhNLr8WT5Zb5hOKM4ZC7W1C2WUgGLp83YmAs4/Sheet1"
    )
      .then((res) => res.json())
      .then((data) => {
        // 🔥 CRITICAL SAFETY CHECK
        if (Array.isArray(data)) {
          setTools(data);
        } else {
          console.error("Sheet data is not an array:", data);
          setTools([]);
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setTools([]);
      });
  }, []);

  // 🛡️ Extra safety
  const safeTools = Array.isArray(tools) ? tools : [];

  const categories = [
    "All",
    ...new Set(safeTools.map((t) => t.Category).filter(Boolean)),
  ];

  const filteredTools = safeTools.filter((tool) => {
    const matchSearch = tool["Tool Name"]
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || tool.Category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">All Tools</h1>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <input
          type="text"
          placeholder="Search tools..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full md:w-64 px-4 py-3 border rounded-lg bg-white"
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredTools.map((tool, index) => (
          <div
            key={tool["Tool ID"] || index}
            className="border rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <h3 className="text-lg font-semibold">
              {tool["Tool Name"]}
            </h3>

            <p className="text-sm text-gray-500 mb-4">
              {tool.Category}
            </p>

            <div className="flex justify-between items-center">
              <a
                href={tool["Tool Link"]}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 font-medium"
              >
                Use Tool →
              </a>

              <button
                onClick={() => setActiveTool(tool)}
                className="border px-3 py-1 rounded-full text-sm"
              >
                i
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeTool && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">
              {activeTool["Tool Name"]}
            </h2>

            <p><b>What it does:</b> {activeTool["What it does"]}</p>
            <p><b>Best for:</b> {activeTool["Best for"]}</p>
            <p><b>Features:</b> {activeTool.Features}</p>
            <p><b>Tool Type:</b> {activeTool["Tool Type"]}</p>
            <p><b>Free / Paid:</b> {activeTool["Free / Paid"]}</p>
            <p><b>Login Required:</b> {activeTool["Login Required"]}</p>
            <p><b>Limitations:</b> {activeTool.Limitations}</p>
            <p><b>Alternatives:</b> {activeTool.Alternatives}</p>

            <div className="flex justify-between mt-6">
              <a
                href={activeTool["Tool Link"]}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Use Tool
              </a>

              <button
                onClick={() => setActiveTool(null)}
                className="border px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
