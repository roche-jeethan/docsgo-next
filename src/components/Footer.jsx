import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm">&copy; {currentYear} Your Company. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="/about" className="hover:text-gray-400 text-sm">About</a>
          <a href="/contact" className="hover:text-gray-400 text-sm">Contact</a>
          <a href="/privacy" className="hover:text-gray-400 text-sm">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
