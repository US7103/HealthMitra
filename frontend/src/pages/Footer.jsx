import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white shadow-inner">
      <div className="max-w-7xl mx-auto px-4 py-3 text-center text-sm opacity-80">
        © {new Date().getFullYear()} All India Institute of Medical Sciences, Delhi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

