import React from 'react';

import { Link } from 'react-router-dom';
import Footer from '../pages/Footer';
import Header from '../pages/Header';


const App = () => {
  return (
    <>
    <div className=' flex flex-col min-h-screen'>
      <Header />

      {/* Front Page Section */}
      <main className="bg-gray-50 flex-grow flex flex-col items-center justify-center px-6 py-12">
        {/* Hero Section */}
        <div className="text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Welcome to AIIMS Delhi Patient Registration System
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            "Caring for you, with precision and compassion."
            <br />
            Manage patient records quickly and securely.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/form"
              className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg text-lg shadow-md transition"
            >
              New Patient Registration
            </Link>
            <Link
              to="/show"
              className="bg-white border border-blue-900 text-blue-900 hover:bg-blue-50 px-6 py-3 rounded-lg text-lg shadow-md transition"
            >
              View Existing Patients
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      </div>
    </>
  );
};

export default App;