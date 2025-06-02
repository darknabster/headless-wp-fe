import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

type NavbarProps = {
  logoUrl: string | null;
};

export default function Navbar({ logoUrl }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return ( // <-- ✅ MAKE SURE THIS RETURN IS PRESENT
    <header className="sticky top-0 z-50 bg-gray-700 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
           {logoUrl ? (
            <Image src={logoUrl} alt="Site Logo" width={150} height={18} />
          ) : (
            'wwwbgame'
          )}
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center text-white">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/about" className="hover:text-blue-500">About</Link>

          <div className="relative group">
            <span className="cursor-pointer hover:text-blue-500">Services</span>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:flex flex-col bg-white shadow-md rounded-md p-2 z-50">
              <Link href="/design" className="block px-4 py-2 hover:bg-gray-100">Design</Link>
              <Link href="/seo" className="block px-4 py-2 hover:bg-gray-100">SEO</Link>
            </div>
          </div>

          <Link href="/contact" className="hover:text-blue-500">Contact</Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <Link href="/about" className="hover:text-blue-500">About</Link>

            <details className="group">
              <summary className="cursor-pointer hover:text-blue-500">Services</summary>
              <div className="pl-4 mt-2 space-y-2">
                <Link href="/design" className="block hover:text-blue-500">Design</Link>
                <Link href="/seo" className="block hover:text-blue-500">SEO</Link>
              </div>
            </details>

            <Link href="/contact" className="hover:text-blue-500">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
