import React, { useState } from 'react';
import SakuraLogo from '../../../../assets/BetterSakura.png';
import { Link } from 'react-router-dom';
import SearchBar from '../../HomeFooter/SearchBar';

const HomeFooter = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <header className="bg-gradient-to-r from-teal-500 via-purple-500 to-indigo-600 text-white py-4 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src={SakuraLogo}
            alt="Sakura Logo"
            className="h-16 w-16 transition-transform duration-300 transform hover:scale-110"
          />
          <p
            className="text-3xl font-bold hidden md:block"
            style={{
              fontFamily: 'Baloo, sans-serif',
              letterSpacing: '0.5px',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            }}
          >
            Setting
          </p>
        </div>

        <SearchBar />

        <div className="hidden md:flex space-x-4">
          <Link
            to="/threads"
            className="text-lg font-semibold hover:text-pink-300 transition duration-300 transform hover:scale-110 hover:underline"
          >
            Threads
          </Link>
          <Link
            to="/community"
            className="text-lg font-semibold hover:text-pink-300 transition duration-300 transform hover:scale-110 hover:underline"
          >
            Community
          </Link>

          <div className="relative">
            <div
              className="flex justify-center items-center w-10 h-10 bg-white rounded-full overflow-hidden border-2 border-white transform transition duration-300 hover:scale-110 hover:shadow-xl cursor-pointer"
              onClick={togglePopover}
            >
              <img
                src={user?.photo || 'default-avatar.png'}
                alt="Account"
                className="w-full h-full object-cover"
              />
            </div>
            {isPopoverOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-lg p-4 w-48">
                <Link
                  to="/settings"
                  className="block text-lg font-semibold py-2 hover:text-purple-500 transition duration-300 transform hover:scale-110"
                  onClick={() => setIsPopoverOpen(false)}
                >
                  Settings
                </Link>
                <Link
                  to="/profile"
                  className="block text-lg font-semibold py-2 hover:text-purple-500 transition duration-300 transform hover:scale-110"
                  onClick={() => setIsPopoverOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  to="/achievements"
                  className="block text-lg font-semibold py-2 hover:text-purple-500 transition duration-300 transform hover:scale-110"
                  onClick={() => setIsPopoverOpen(false)}
                >
                  Achievements
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none transition-transform duration-300 transform hover:scale-110"
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
            <div className="absolute top-16 right-4 bg-white text-black rounded-lg shadow-lg p-4 w-48">
              <Link
                to="/threads"
                className="block text-lg font-semibold py-2 hover:text-purple-500 transition duration-300 transform hover:scale-110"
                onClick={() => setIsMenuOpen(false)}
              >
                Threads
              </Link>
              <Link
                to="/community"
                className="block text-lg font-semibold py-2 hover:text-purple-500 transition duration-300 transform hover:scale-110"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </Link>
              <div
                className="flex justify-center items-center w-10 h-10 bg-white rounded-full overflow-hidden border-2 border-white transform transition duration-300 hover:scale-110 hover:shadow-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                <img
                  src={user?.photo || 'default-avatar.png'}
                  alt="Account"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default HomeFooter;
