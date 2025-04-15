"use client";

import { motion } from "framer-motion";
import Navbar from "../../components/navbar";
import ThemeToggle from "../../components/ThemeToggle";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen text-black dark:text-white transition-colors duration-300">
      <Navbar />

      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <main className="relative flex flex-1 flex-col items-center justify-center text-center px-4 pt-40 pb-28 overflow-hidden">
        {/* Background Gradient Blobs */}
        <div className="absolute w-72 h-72 bg-purple-300 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob top-10 left-10 -z-10"></div>
        <div className="absolute w-72 h-72 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 top-40 right-10 -z-10"></div>

        {/* Animated Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-lg z-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I’m Vinka
          <br />
          <span className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300">
            I design, code & optimize digital experiences ✨
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-base md:text-lg text-gray-500 dark:text-gray-300 max-w-xl mt-6 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Mahasiswa Sistem Informasi dengan passion di UI/UX, pengembangan web, dan performa website.
        </motion.p>

        {/* Theme Toggle with animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 z-10"
        >
          <ThemeToggle />
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Vinka Aleyka Derina. All rights reserved.
      </footer>
    </div>
  );
}
