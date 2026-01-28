import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllTools } from "../services/toolsApi";

export default function ToolDetail() {
  const { toolId } = useParams();
  const [tool, setTool] = useState(null);

  useEffect(() => {
    getAllTools().then(data => {
      const found = data.find(t => t["Tool ID"] === toolId);
      setTool(found);
    });
  }, [toolId]);

  if (!tool) {
    return <p className="p-6">Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <Link to="/tools" className="text-blue-600 text-sm">
        ← Back to Tools
      </Link>

      <h1 className="text-3xl font-bold mt-4 mb-2">
        {tool["Tool Name"]}
      </h1>

      <p className="text-gray-700 mb-6">
        {tool["What it does"]}
      </p>

      <div className="space-y-3 text-sm">
        <p><b>Category:</b> {tool["Category"]}</p>
        <p><b>Tool Type:</b> {tool["Tool Type"]}</p>
        <p><b>Best for:</b> {tool["Best for"]}</p>
        <p><b>Features:</b> {tool["Features"]}</p>
        <p><b>Free / Paid:</b> {tool["Free / Paid"]}</p>
        <p><b>Login Required:</b> {tool["Login Required"]}</p>
        <p><b>Limitations:</b> {tool["Limitations"]}</p>
        <p><b>Alternatives:</b> {tool["Alternatives"]}</p>
      </div>

      {/* Use Tool Button */}
      {tool["Tool Link"] && (
        <a
          href={tool["Tool Link"]}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Use Tool →
        </a>
      )}
    </div>
  );
}
