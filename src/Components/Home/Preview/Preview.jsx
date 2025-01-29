import React from 'react';
import PreviewHeader from '../PreviewHeader/PreviewHeader.jsx';
import backgroundImage from '../../../assets/Background.png';

const Preview = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PreviewHeader />
      <main 
        className="flex-grow flex items-center justify-center px-4" 
        style={{ 
          backgroundImage: `url(${backgroundImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundAttachment: 'fixed', 
          height: '100vh' 
        }}
      >
        <ul className="space-y-8 w-full max-w-lg">
          <li 
            className="p-6 sm:p-10 bg-white bg-opacity-80 rounded-3xl shadow-xl text-center animate__animated animate__fadeIn" 
            style={{ animationDuration: '700ms', animationDelay: '200ms' }}
          >
            <h2 className="text-3xl font-semibold mb-4" style={{ fontFamily: 'Baloo, sans-serif' }}>
              Explore, Share, and Connect!
            </h2>
            <p className="text-gray-600">
              SakuraShare is your platform to share model instructions, images, and more with others in an engaging and fun way. Navigate through the menu to get started!
            </p>
          </li>

          <li 
            className="flex justify-center mt-2 animate__animated animate__bounceIn" 
            style={{ animationDuration: '800ms', animationDelay: '300ms' }}
          >
            <button 
              className="bg-gradient-to-r from-teal-500 via-purple-500 to-indigo-600 text-white py-4 px-10 sm:py-5 sm:px-12 rounded-xl font-semibold text-xl sm:text-2xl shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl"
              onClick={() => window.location.href = '/register'}
            >
              Start Now
            </button>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Preview;
