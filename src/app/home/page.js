'use client';

import Header from '../navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="pt-20 container mx-auto p-6 space-y-12">
        
        {/* Hero Section */}
        <section className="bg-purple-600 text-white py-20 text-center rounded-lg shadow-md">
          <h1 className="text-4xl font-bold mb-4">Selamat Datang di CV Online</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Saya <strong>Vinka Aleyka Derina</strong>, seorang mahasiswa Sistem Informasi dengan minat dalam UI/UX Design dan pengembangan web.
          </p>
          <div className="mt-6">
            <Link href="/about" className="bg-white text-purple-600 font-bold py-2 px-6 rounded-full shadow-md hover:bg-gray-200">
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </section>

        {/* Highlight Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard 
            title="Desain UI/UX Profesional" 
            description="Menciptakan desain antarmuka yang menarik dan ramah pengguna." 
            icon="🎨"
          />
          <FeatureCard 
            title="Pengembangan Web" 
            description="Membangun website responsif dan dinamis dengan teknologi modern." 
            icon="💻"
          />
          <FeatureCard 
            title="Optimasi & SEO" 
            description="Meningkatkan performa dan visibilitas website dengan strategi terbaik." 
            icon="🚀"
          />
        </section>

        {/* Call to Action */}
        <section className="text-center bg-white py-12 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Ingin Bekerja Sama?</h2>
          <p className="text-lg text-gray-700">Jangan ragu untuk menghubungi saya jika membutuhkan jasa desain atau pengembangan web.</p>
          <div className="mt-6">
            <Link href="/contact" className="bg-purple-600 text-white font-bold py-2 px-6 rounded-full shadow-md hover:bg-purple-700">
              Hubungi Saya
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}

function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="text-5xl">{icon}</div>
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
