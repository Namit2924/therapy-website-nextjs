"use client";
import { motion } from "framer-motion";

export default function Office() {
  return (
    <section id="office" className="py-28 px-6 bg-white overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-green-900">
            A Calm Space for Healing in Santa Monica
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Designed to feel grounded, warm, and quietly restorative. 
            Natural light, soft textures, and thoughtful details create 
            an environment that supports reflection and emotional clarity.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="mt-20 grid gap-10 md:grid-cols-2">

          {/* Image 1 */}
          <motion.div
            initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative h-80 rounded-3xl overflow-hidden shadow-xl group"
          >
            <motion.img
              src="/office1.jpeg"
              alt="Therapy Office Interior"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6 }}
            />

            {/* Luxury Overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-700"></div>
          </motion.div>

          {/* Image 2 */}
          <motion.div
            initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-80 rounded-3xl overflow-hidden shadow-xl group"
          >
            <motion.img
              src="/office2.jpeg"
              alt="Counseling Room"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6 }}
            />

            {/* Luxury Overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-700"></div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
