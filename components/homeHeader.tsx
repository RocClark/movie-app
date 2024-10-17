'use client';
import { useState } from 'react';
import Link from 'next/link';

interface HomeHeaderProps {
  onPageChange: (page: string | null) => void;
}

function HomeHeader({ onPageChange }: HomeHeaderProps) {
  const [activePage, setActivePage] = useState<string | null>(null); // Define type explicitly
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu open/close
  };

  const handlePageChange = (page: string) => {
    setActivePage(page); // Update the active page state
    onPageChange(page); // Notify parent of the active page
    setMenuOpen(false); // Close the menu after selecting a page
  };

  return (
    <div className="navbar bg-white shadow">
      <header className="flex items-center justify-between px-4 py-4">        
        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Links for larger screens */}
        <div className="hidden lg:flex items-center space-x-8">
          <button onClick={() => handlePageChange('movieHome')} className="text-gray-900 font-bold">Home</button>
          <button onClick={() => handlePageChange('magic')} className="text-gray-900 font-bold">Magic 8-Ball</button>
          <button onClick={() => handlePageChange('about')} className="text-gray-900 font-bold">About</button>
        </div>

        {/* Menu for smaller screens */}
        <div className={`${menuOpen ? 'block' : 'hidden'} lg:hidden absolute top-16 right-4 bg-white shadow-lg rounded-md w-48`}>
          <button onClick={() => handlePageChange('movieHome')} className="block px-4 py-2 text-gray-900 font-bold">Home</button>
          <button onClick={() => handlePageChange('magic')} className="block px-4 py-2 text-gray-900 font-bold">Magic 8-Ball</button>
          <button onClick={() => handlePageChange('about')} className="block px-4 py-2 text-gray-900 font-bold">About</button>
        </div>
      </header>
    </div>
  );
}

export default HomeHeader;