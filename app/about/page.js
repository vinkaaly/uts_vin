"use client";

import Navbar from "../../components/navbar";
import ThemeToggle from "../../components/ThemeToggle";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen px-4 py-10 text-black dark:text-white transition-colors duration-300 bg-white dark:bg-gray-950">
      <Navbar />

      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 items-center">
        <div>
          <h1 className="text-5xl font-bold mb-8">ABOUT ME</h1>

          <div>
            <div className="border-t pt-4">
              <p className="text-sm leading-relaxed mt-4">
                Nama saya Vinka Aleyka Derina, seorang Mahasiswa Sistem
                Informasi yang memiliki minat dalam teknologi, desain UI, dan
                pengembangan web. Saya percaya bahwa kombinasi antara desain
                yang menarik dan fungsionalitas yang baik dapat menciptakan
                pengalaman digital yang bermakna. Terima kasih telah mengunjungi
                situs saya!
              </p>
            </div>
          </div>
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/profile.jpg"
            alt="Vinka Aleyka Derina"
            width={350}
            height={450}
            priority
            className="object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

      {/* Layanan Section */}
      <section className="bg-gray-100 dark:bg-gray-900 py-16 px-6 mt-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🎨",
              title: "Desain UI/UX",
              desc: "Menciptakan desain antarmuka yang menarik dan ramah pengguna.",
            },
            {
              icon: "💻",
              title: "Pengembangan Web",
              desc: "Membangun website responsif dan dinamis dengan teknologi modern.",
              delay: 0.2,
            },
            {
              icon: "🚀",
              title: "Optimasi & SEO",
              desc: "Meningkatkan performa dan visibilitas website dengan strategi terbaik.",
              delay: 0.4,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: item.delay || 0, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
