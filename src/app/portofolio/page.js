'use client';

import Navbar from '../navbar';

const projects = [
  {
    id: 1,
    title: 'Toko Ice Cream PoPcicle',
    description:
      'Desain UI/UX menarik untuk toko es krim dengan tema pastel dan pengalaman belanja yang interaktif.',
    image: '/pop.jpg',
    tech: ['Figma', 'UI/UX Design', 'Prototype'],
  },
  {
    id: 2,
    title: 'Web Store SKZOO',
    description:
      'Website e-commerce eksklusif untuk merchandise SKZOO, dilengkapi dengan fitur katalog interaktif dan sistem pembayaran online.',
    image: '/hero.jpg',
    tech: ['HTML', 'PHP', 'MySql','CSS'],
  },
  {
    id: 3,
    title: 'Form Anggota Perpus',
    description:
      'Aplikasi berbasis desktop untuk pendaftaran anggota perpustakaan dengan sistem validasi data.',
    image: '/frmperpus.jpg',
    tech: ['Java', 'Apache NetBeans', 'PLSQL'],
  },
];

export default function Portfolio() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="container mx-auto p-6 mt-16">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Portofolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-purple-200 text-purple-800 text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
