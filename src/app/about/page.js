import Navbar from '../navbar';
import { Mail, MapPin, Phone, Download } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="container mx-auto p-6 mt-16">
        {/* Bagian Profil */}
        <section className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="flex flex-col items-center">
            <img
              src="/profile.jpg"
              alt="Profile Picture"
              className="w-40 h-40 rounded-full shadow-md mb-4"
            />
            <h3 className="text-2xl font-semibold">Vinka Aleyka Derina</h3>
            <p className="text-gray-600 text-lg">Mahasiswa Sistem Informasi</p>
            <p className="text-gray-700 mt-2 max-w-lg">
              Saya adalah seorang mahasiswa Sistem Informasi yang memiliki ketertarikan dalam UI/UX Design, 
              pengembangan web, dan teknologi digital. Saya senang belajar hal baru dan bekerja secara tim untuk 
              menciptakan solusi teknologi yang inovatif.
            </p>
            <a
              href="/CV-Vinka.pdf"
              download
              className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700 flex items-center"
            >
              <Download size={20} className="mr-2" /> Unduh CV
            </a>
          </div>
        </section>

        {/* Bagian Informasi Pribadi */}
        <section className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-2xl font-bold mb-4">Informasi Pribadi</h2>
          <ul className="text-gray-700 space-y-3">
            <li className="flex items-center">
              <MapPin size={20} className="text-purple-600 mr-2" />
              <strong>Alamat:</strong> Bandung, Jawa Barat, Indonesia
            </li>
            <li className="flex items-center">
              <Phone size={20} className="text-purple-600 mr-2" />
              <strong>Telepon:</strong> +62 812-3456-7890
            </li>
            <li className="flex items-center">
              <Mail size={20} className="text-purple-600 mr-2" />
              <strong>Email:</strong> 
              <a href="mailto:vinka@example.com" className="text-purple-600 font-bold ml-1">
                vinka@example.com
              </a>
            </li>
            <li className="flex items-center">
              <strong>Jurusan:</strong> Sistem Informasi
            </li>
            <li className="flex items-center">
              <strong>Universitas:</strong> Universitas Masoem
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
