"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-24 px-6 text-center bg-green-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >

        <h1 className="text-4xl md:text-5xl font-semibold text-green-900 leading-tight">
          Anxiety & Trauma Therapy in Santa Monica, CA
        </h1>

        <p className="mt-6 text-lg text-gray-700">
          Compassionate, evidence-based therapy for adults navigating anxiety,
          burnout, and the lasting effects of trauma.
        </p>

        <button className="mt-8 bg-green-800 text-white px-6 py-3 rounded-full hover:opacity-90 transition">
          Request a Consultation
        </button>

      </motion.div>
    </section>
  );
}
