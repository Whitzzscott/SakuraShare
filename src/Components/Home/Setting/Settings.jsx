import React, { useState } from 'react';
import SettingHeader from './SettingHeader/SettingHeader';
import General from './Settings/General';
import Account from './Settings/Account';
import Profile from './Settings/Profile';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="min-h-screen bg-white">
      <SettingHeader />

      <div className="mt-28 flex justify-center">
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setActiveTab('general')}
            className={`w-48 py-3 px-4 text-base font-semibold text-gray-700 border-0 focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-b-2 hover:border-black ${
              activeTab === 'general' ? 'border-b-2 border-black' : ''
            }`}
          >
            General
          </button>

          <button
            onClick={() => setActiveTab('account')}
            className={`w-48 py-3 px-4 text-base font-semibold text-gray-700 border-0 focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-b-2 hover:border-black ${
              activeTab === 'account' ? 'border-b-2 border-black' : ''
            }`}
          >
            Account
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`w-48 py-3 px-4 text-base font-semibold text-gray-700 border-0 focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-b-2 hover:border-black ${
              activeTab === 'profile' ? 'border-b-2 border-black' : ''
            }`}
          >
            Profile
          </button>
        </div>
      </div>

      <div className="mt-8 px-4">
        {activeTab === 'general' && <General />}
        {activeTab === 'account' && <Account />}
        {activeTab === 'profile' && <Profile />}
      </div>
    </div>
  );
};

export default Settings;
