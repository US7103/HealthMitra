import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        
        {/* Title Section */}
        <div>
          <h1 className="text-2xl font-bold tracking-wide">
            Patient Registration System
          </h1>
          <span className="text-sm font-medium opacity-80">
            AIIMS, Delhi
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex gap-3">
          <Link
            to="/"
            className="px-4 py-2 rounded-md bg-blue-700 hover:bg-blue-600 transition-colors duration-200 font-medium shadow-sm"
          >
            Home
          </Link>
          <Link
            to="/show"
            className="px-4 py-2 rounded-md bg-blue-700 hover:bg-blue-600 transition-colors duration-200 font-medium shadow-sm"
          >
            Existing Patients
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;



