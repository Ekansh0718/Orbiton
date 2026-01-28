import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
        <p>© {new Date().getFullYear()} Orbiton. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Contact</span>
        </div>
      </div>
    </footer>
  );
}
