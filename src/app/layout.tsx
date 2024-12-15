'use client';

import { useState } from 'react';
import './styles/globals.css'; 
import Footer from './components/Footer';


export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>My Website</title>
          {/* Add any other meta tags or links here */}
        </head>
        <body>
          <header>
            <div className="logo">
              <h1>My Website</h1>
            </div>
            <nav>
              <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className={`nav ${isMenuOpen ? 'active' : ''}`}>
                <ul>
                  <li><a href="/" onClick={closeMenu}>Home</a></li>
                  <li><a href="/about" onClick={closeMenu}>About</a></li>
                  <li><a href="/contact" onClick={closeMenu}>Contact</a></li>
                  <li><a href="/store" onClick={closeMenu}>Store</a></li>
                </ul>
              </div>
            </nav>
          </header>
          <main>{children}</main>
          
            <Footer/>
          
        </body>
      </html>
    </>
  );
}
