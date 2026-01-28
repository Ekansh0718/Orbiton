export async function getAllTools() {
  try {
    const res = await fetch(
      "https://opensheet.elk.sh/1KFMcJMHhNLr8WT5Zb5hOKM4ZC7W1C2WUgGLp83YmAs4/Sheet1"
    );

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to fetch tools:", error);
    return [];
  }
}
