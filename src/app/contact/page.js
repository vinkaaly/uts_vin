import Navbar from '../navbar';
import { Mail, Instagram, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="container mx-auto p-6 mt-16">
        <section className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">Kontak Saya</h2>
          <p className="text-gray-700 mb-6">
            Silakan hubungi saya melalui informasi di bawah ini atau kirimkan pesan langsung melalui form.
          </p>

          {/* Informasi Kontak */}
          <div className="flex flex-col items-center space-y-4 mb-6">
            <div className="flex items-center space-x-3 text-lg">
              <Mail size={24} className="text-purple-600" />
              <a href="mailto:valeyka.d@gmail.com" className="text-purple-600 font-bold">
                valeyka.d@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3 text-lg">
              <Instagram size={24} className="text-purple-600" />
              <a href="https://instagram.com/archivee.vy" target="_blank" rel="noopener noreferrer" className="text-purple-600 font-bold">
                @archivee.vy
              </a>
            </div>
          </div>

          {/* Formulir Kontak */}
          <form className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-lg mx-auto">
            <h3 className="text-xl font-bold mb-4">Kirim Pesan</h3>
            <div className="mb-4">
              <label className="block text-left text-gray-700 font-semibold">Nama</label>
              <input
                type="text"
                placeholder="Masukkan nama Anda"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-left text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-left text-gray-700 font-semibold">Pesan</label>
              <textarea
                placeholder="Tulis pesan Anda..."
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 h-28"
              />
            </div>
            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700 flex items-center justify-center w-full"
            >
              <Send size={20} className="mr-2" /> Kirim
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
