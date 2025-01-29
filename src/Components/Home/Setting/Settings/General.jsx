import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

const General = () => {
  return (
    <div className="p-8 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mt-8">
      <h1
        className="text-3xl font-bold text-black mb-6 animate__animated animate__fadeIn"
        style={{ fontFamily: 'Baloo, sans-serif' }}
      >
        General Settings
      </h1>

      <div className="mb-6 animate__animated animate__fadeIn">
        <h2 className="text-xl font-semibold text-black" style={{ fontFamily: 'Baloo, sans-serif' }}>Gender</h2>
        <select className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-200 ease-in-out">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-6 animate__animated animate__fadeIn">
        <h2 className="text-xl font-semibold text-black" style={{ fontFamily: 'Baloo, sans-serif' }}>Donation</h2>
        <p className="mt-2 text-gray-600">Support us by making a donation and helping us grow.</p>
        <Link
          to="/donate"
          className="group flex items-center justify-between mt-4 py-3 px-6 border border-gray-300 text-gray-800 font-semibold rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
        >
          <span>Donate Now</span>
          <span className="ml-2 text-xl text-purple-600 transform transition-transform duration-300 ease-in-out group-hover:scale-x-[-1]">
            &gt;
          </span>
        </Link>
      </div>

      <div className="mb-6 animate__animated animate__fadeIn">
        <h2 className="text-xl font-semibold text-black" style={{ fontFamily: 'Baloo, sans-serif' }}>Advanced</h2>
        <p className="mt-2 text-gray-600">For account deletion, use the option below. This action is irreversible.</p>
        <Link
          to="/delete-account"
          className="group flex items-center justify-between mt-4 py-3 px-6 border border-gray-300 text-gray-800 font-semibold rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
        >
          <span>Delete Account</span>
          <span className="ml-2 text-xl text-purple-600 transform transition-transform duration-300 ease-in-out group-hover:scale-x-[-1]">
            &gt;
          </span>
        </Link>
      </div>

      <div className="mt-8 animate__animated animate__fadeIn">
        <Link
          to="/logout"
          className="group flex items-center justify-between w-full py-3 px-6 border border-gray-300 text-gray-800 font-semibold rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
        >
          <span>Log Out</span>
          <span className="ml-2 text-xl text-purple-600 transform transition-transform duration-300 ease-in-out group-hover:scale-x-[-1]">
            &gt;
          </span>
        </Link>
      </div>
    </div>
  );
};

export default General;
