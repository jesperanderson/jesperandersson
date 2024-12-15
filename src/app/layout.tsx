// src/app/layout.tsx
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/globals.css'; 


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My Portfolio</title>
        {/* Add other metadata here if needed */}
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}