'use client';

import Navbar from '../navbar';
import { Paintbrush, Code, Layers } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Desain UI/UX',
    description:
      'Membantu menciptakan pengalaman pengguna yang menarik dengan desain antarmuka yang responsif dan modern.',
    icon: <Paintbrush size={40} className="text-purple-600" />,
    tech: ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping'],
  },
  {
    id: 2,
    title: 'Pengembangan Frontend',
    description:
      'Membangun website interaktif dan cepat menggunakan teknologi modern.',
    icon: <Code size={40} className="text-purple-600" />,
    tech: ['HTML', 'PHP', 'MySql','CSS'],
  },
  {
    id: 3,
    title: 'Prototyping & Mockup',
    description:
      'Menyediakan prototipe interaktif sebelum pengembangan penuh, memastikan kepuasan pengguna sejak tahap awal.',
    icon: <Layers size={40} className="text-purple-600" />,
    tech: ['Figma', 'InVision', 'User Testing'],
  },
];

export default function Services() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="container mx-auto p-6 mt-16">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Layanan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-sm mt-2 mb-4">{service.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {service.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-purple-200 text-purple-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
