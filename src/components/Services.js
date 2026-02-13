"use client";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >

        <h2 className="text-3xl md:text-4xl font-semibold text-green-900">
          Therapy Services
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Specialized support for adults experiencing anxiety, trauma, and burnout.
        </p>

        {/* Grid */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl shadow-sm border hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-green-800">
              Anxiety & Panic Therapy
            </h3>
            <p className="mt-4 text-gray-600">
              Support for chronic worry, overthinking, panic attacks, and
              feeling constantly on edge. Learn tools to calm your nervous system.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl shadow-sm border hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-green-800">
              Trauma & EMDR Therapy
            </h3>
            <p className="mt-4 text-gray-600">
              A safe, paced approach to trauma therapy for both single-incident
              and complex trauma experiences.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl shadow-sm border hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-green-800">
              Burnout & High-Achiever Support
            </h3>
            <p className="mt-4 text-gray-600">
              Therapy for professionals and creatives experiencing burnout,
              perfectionism, and high internal pressure.
            </p>
          </motion.div>

        </div>

      </motion.div>

    </section>
  );
}
