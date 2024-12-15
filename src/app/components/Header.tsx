// src/app/components/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header>
      <h1>My Portfolio</h1>

      {/* Desktop navigation */}
      <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/store">Store</Link>
      </nav>

      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
}
