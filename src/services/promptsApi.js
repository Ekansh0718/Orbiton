export async function getAllPrompts() {
  const res = await fetch(
    "https://opensheet.elk.sh/1KFMcJMHhNLr8WT5Zb5hOKM4ZC7W1C2WUgGLp83YmAs4/Sheet2"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch prompts");
  }

  return res.json();
}
