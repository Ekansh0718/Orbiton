import React from "react";
import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import Prompts from "./pages/Prompts";


function App() {
  return (
    <>
      <Navbar />

      {/* 👇 This padding prevents content hiding behind navbar */}
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/prompts" element={<Prompts />} />
        </Routes>
        
      <Analytics />
    </>
  );
}

export default App;
