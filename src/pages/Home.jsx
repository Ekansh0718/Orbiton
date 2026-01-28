import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import TypingText from "../components/TypingText";


export default function Home() {
  return (
    <div className="bg-slate-50">

      {/* HERO */}
      <section className="pt-32 pb-28 bg-grid">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: -10 }}                                 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-white text-sm text-slate-600 shadow"
          >
            ✨ Built for students, by student
          </motion.div>

          <h1 className="mt-8 text-4xl md:text-6xl font-extrabold text-slate-900">
            All student tools.                  
            <br />
            One simple platform.
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            <TypingText /> — everything you need to work faster,
            study smarter, and stay stress-free.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link
              to="/tools"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl shadow hover:bg-slate-800 transition"
            >
              Explore Tools <ArrowRight size={18} />
            </Link>

            <Link
              to="/prompts"
              className="px-6 py-3 rounded-xl border bg-white hover:bg-slate-100 transition"
            >
              Browse Prompts
            </Link>
          </div>

          <p className="mt-10 text-sm text-slate-500">
            Trusted by 10,000+ students across 50+ universities
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Smart Tools",
              desc: "PDF, document & productivity tools curated for students.",
            },
            {
              title: "AI Prompts",
              desc: "Exam-ready prompts for notes, revision and clarity.",
            },
            {
              title: "Fast & Simple",
              desc: "No login. No clutter. Just results.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="bg-white rounded-2xl p-6 shadow-sm border"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Built for real student problems
        </h2>
        <p className="mt-4 text-slate-300 max-w-xl mx-auto">
          Assignments, exams, PDFs, notes — Orbiton removes friction
          from daily student life so you can focus on learning.
        </p>

        <Link
          to="/tools"
          className="inline-block mt-8 px-8 py-3 rounded-xl bg-white text-slate-900 font-medium hover:bg-slate-100 transition"
        >
          Start Using Orbiton
        </Link>
      </section>
    </div>
  );
}
