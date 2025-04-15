"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../../components/navbar";
import ThemeToggle from "../../components/ThemeToggle";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    id: "p1",
    title: "Toko Ice Cream PoPcicle",
    image: "/pop.jpg",
    description:
      "Desain UI/UX menarik untuk toko es krim dengan tema pastel dan pengalaman belanja yang interaktif.",
    tags: ["Figma", "UI/UX Design", "Prototype"],
  },
  {
    id: "p2",
    title: "Web Store SKZOO",
    image: "/hero.jpg",
    description:
      "Website e-commerce eksklusif untuk merchandise SKZOO, dilengkapi dengan fitur katalog interaktif dan sistem pembayaran online.",
    tags: ["HTML", "PHP", "MySql", "CSS"],
  },
  {
    id: "p3",
    title: "Form Anggota Perpus",
    image: "/frmperpus.jpg",
    description:
      "Aplikasi berbasis desktop untuk pendaftaran anggota perpustakaan dengan sistem validasi data.",
    tags: ["Java", "Apache NetBeans", "PLSQL"],
  },
];

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="min-h-screen px-4 pt-28 pb-10 bg-white dark:bg-gray-900 text-black dark:text-white transition-all duration-300">
      <Navbar />
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Portofolio
      </motion.h1>

      {selectedItem ? (
        <motion.div
          key={selectedItem.id}
          className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={() => setSelectedItem(null)}
            className="text-sm mb-4 hover:underline"
          >
            ← Kembali ke daftar
          </button>
          <Image
            src={selectedItem.image}
            alt={selectedItem.title}
            width={900}
            height={500}
            priority
            className="w-full h-auto rounded-xl object-contain mb-6"
          />
          <h2 className="text-2xl font-bold mb-2">{selectedItem.title}</h2>
          <p className="mb-4">{selectedItem.description}</p>
          <div className="flex flex-wrap gap-2">
            {selectedItem.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-purple-200 text-purple-700 px-3 py-1 text-xs lg:text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-2">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="cursor-pointer bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 transition hover:shadow-xl hover:scale-[1.02]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <h2 className="text-xl lg:text-2xl font-bold mb-4">
                {item.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-purple-200 text-purple-700 px-3 py-1 text-xs lg:text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
