'use client';

import Navbar from '../navbar';
import { Code, Brush, LayoutTemplate, FileCode, PenTool, Coffee, Server } from 'lucide-react';

const skills = [
  {
    id: 1,
    title: 'HTML',
    description: 'Membangun struktur web yang bersih dan semantik.',
    icon: <FileCode size={40} className="text-purple-600" />,
  },
  {
    id: 2,
    title: 'CSS & Tailwind',
    description: 'Membuat tampilan website modern dengan desain responsif.',
    icon: <Brush size={40} className="text-purple-600" />,
  },
  {
    id: 3,
    title: 'JavaScript',
    description: 'Membuat website interaktif dan dinamis dengan JS.',
    icon: <Code size={40} className="text-purple-600" />,
  },
  {
    id: 4,
    title: 'React & Next.js',
    description: 'Mengembangkan website dengan teknologi modern dan performa tinggi.',
    icon: <LayoutTemplate size={40} className="text-purple-600" />,
  },
  {
    id: 5,
    title: 'Figma & Adobe XD',
    description: 'Mendesain UI/UX yang menarik dan user-friendly.',
    icon: <PenTool size={40} className="text-purple-600" />,
  },
  {
    id: 6,
    title: 'Java',
    description: 'Mengembangkan aplikasi dengan bahasa Java yang kuat dan fleksibel.',
    icon: <Coffee size={40} className="text-purple-600" />,
  },
  {
    id: 7,
    title: 'PHP',
    description: 'Mengembangkan backend yang dinamis dengan PHP dan MySQL.',
    icon: <Server size={40} className="text-purple-600" />,
  },
];

export default function Skills() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="container mx-auto p-6 mt-16">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Keahlian</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold text-gray-800">{skill.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{skill.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
