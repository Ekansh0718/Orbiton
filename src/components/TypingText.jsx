import React, { useEffect, useState } from "react";

const words = [
  "PDF tools",
  "AI prompts",
  "exam helpers",
  "study resources",
];

function TypingText() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 800);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <span style={{ color: "#2563eb", fontWeight: 600 }}>
      {text}
      <span style={{ opacity: 0.6 }}>|</span>
    </span>
  );
}

export default TypingText;
