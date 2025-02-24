'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Home, User, Star, Briefcase, Phone, Layers } from 'lucide-react';
import NavLink from './NavLink';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-purple-600 text-white p-4 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">CV Online</h1>
        <nav className="hidden md:flex space-x-6 text-lg">
          <NavLink href="/home" icon={<Home size={20} />} text="Home" />
          <NavLink href="/about" icon={<User size={20} />} text="About" />
          <NavLink href="/skills" icon={<Star size={20} />} text="Skills" />
          <NavLink href="/portofolio" icon={<Briefcase size={20} />} text="Portfolio" />
          <NavLink href="/services" icon={<Layers size={20} />} text="Layanan" />
          <NavLink href="/contact" icon={<Phone size={20} />} text="Kontak" />
        </nav>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✖' : '☰'}
        </button>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-purple-500 p-4 flex flex-col space-y-3 text-lg">
          <NavLink href="/home" text="Home" />
          <NavLink href="/about" text="About" />
          <NavLink href="/skills" text="Skills" />
          <NavLink href="/portofolio" text="Portfolio" />
          <NavLink href="/services" text="Layanan" />
          <NavLink href="/contact" text="Kontak" />
        </nav>
      )}
    </header>
  );
}
