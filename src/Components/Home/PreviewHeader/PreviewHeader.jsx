import React, { useState } from 'react';
import sakuraLogo from '../../../assets/BetterSakura.png';
import { Link } from 'react-router-dom';

const PreviewHeader = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-teal-500 via-purple-500 to-indigo-600 text-white py-4 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src={sakuraLogo}
            alt="Sakura Logo"
            className="h-16 w-16 transition-transform duration-300 transform hover:scale-110 animate__animated animate__bounceIn"
          />
          <p
            className="text-3xl font-bold"
            style={{
              fontFamily: 'Baloo, sans-serif',
              letterSpacing: '0.5px',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            }}
          >
            SakuraShare
          </p>
        </div>

        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="text-lg font-semibold hover:text-pink-300 transition duration-300 transform hover:scale-110 hover:underline animate__animated animate__fadeIn"
          >
            Login
          </Link>
          <Link
            to="/home"
            className="text-lg font-semibold hover:text-pink-300 transition duration-300 transform hover:scale-110 hover:underline animate__animated animate__fadeIn"
          >
            Home
          </Link>
          <Link
            to="/register"
            className="text-lg font-semibold hover:text-pink-300 transition duration-300 transform hover:scale-110 hover:underline animate__animated animate__fadeIn"
          >
            Register
          </Link>
          <Link
            to="/community"
            className="text-lg font-semibold hover:text-pink-300 transition duration-300 transform hover:scale-110 hover:underline animate__animated animate__fadeIn"
          >
            Community
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none transition-transform duration-300 transform hover:scale-110 animate__animated animate__bounceIn"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {isMenuOpen && (
            <div className="absolute top-16 right-4 bg-white text-black rounded-lg shadow-lg p-4 w-48 animate__animated animate__fadeIn">
              <Link
                to="/login"
                className="block text-lg font-semibold py-2 hover:text-purple-500 transition duration-300 transform hover:scale-110 animate__animated animate__fadeIn"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/home"
                className="block text-lg font-semibold py-2 hover:text-purple-500 transition duration-300 transform hover:scale-110 animate__animated animate__fadeIn"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/register"
                className="block text-lg font-semibold py-2 hover:text-purple-500 transition duration-300 transform hover:scale-110 animate__animated animate__fadeIn"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>
              <Link
                to="/community"
                className="block text-lg font-semibold py-2 hover:text-purple-500 transition duration-300 transform hover:scale-110 animate__animated animate__fadeIn"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </Link>
            </div>
          )}
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="flex justify-center items-center w-10 h-10 bg-white rounded-full overflow-hidden border-2 border-white animate__animated animate__bounceIn transform transition duration-300 hover:scale-110 hover:shadow-xl"
          >
            <img
              src={user?.photo || 'default-avatar.png'}
              alt="Account"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default PreviewHeader;
