"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-green-50">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center"
      >

        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-green-900">
            Meet Dr. Maya Reynolds, PsyD
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Dr. Maya Reynolds is a licensed clinical psychologist based in 
            Santa Monica, California. She works with thoughtful, high-achieving 
            adults who may appear functional on the outside but feel overwhelmed 
            internally by anxiety, trauma, or burnout.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Her approach is warm, collaborative, and grounded. She integrates 
            evidence-based methods including CBT, EMDR, mindfulness, and 
            body-oriented techniques to address both emotional and physiological 
            aspects of stress and trauma.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Her goal is not only symptom relief, but helping clients develop 
            resilience, deeper insight, and a stronger relationship with 
            themselves over time.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-sm">
          <img 
            src="/dr .png"
            alt="Dr. Maya Reynolds"
            className="w-full h-[650px] object-cover object-center"
          />
        </div>

      </motion.div>

    </section>
  );
}
