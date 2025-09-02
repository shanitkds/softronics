import React from 'react';
import { FaFacebookF, FaInstagram, FaTimes, FaGithub, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#e2e2f0] text-gray-800 py-6 w-screen ">
      <div className="container mx-auto flex flex-col items-center">
        {/* Social icons */}
        <div className="flex gap-6 mb-4">
          <a href="#"><FaFacebookF className="hover:text-blue-600 transition-colors duration-300" /></a>
          <a href="#"><FaInstagram className="hover:text-pink-500 transition-colors duration-300" /></a>
          <a href="#"><FaTimes className="hover:text-black transition-colors duration-300" /></a>
          <a href="#"><FaGithub className="hover:text-gray-900 transition-colors duration-300" /></a>
          <a href="#"><FaYoutube className="hover:text-red-600 transition-colors duration-300" /></a>
        </div>

        {/* Footer text */}
        <p className="text-sm">
          © 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
