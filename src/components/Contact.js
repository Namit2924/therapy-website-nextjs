"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-green-900">
            Get in Touch
          </h2>
          <p className="mt-4 text-gray-600">
            If you’re ready to begin therapy or have questions about working 
            together, please reach out. I look forward to connecting with you.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 space-y-6 bg-gray-50 p-8 rounded-2xl shadow-sm"
        >

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3 
              text-black placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-green-800"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3 
              text-black placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-green-800"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3 
              text-black placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-green-800"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-900 text-white py-3 rounded-lg 
            hover:bg-green-800 hover:shadow-md transition duration-300"
          >
            Send Message
          </button>

        </motion.form>

      </div>
    </section>
  );
}
