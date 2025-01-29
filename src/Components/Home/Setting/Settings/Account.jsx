import React, { useEffect, useState } from 'react';
import ServerAPI from "../../../../Config/ServerAPI";

const Account = () => {
  const [userRole, setUserRole] = useState(null);
  const [modRole, setModRole] = useState('NULL');
  const [adminRole, setAdminRole] = useState('NULL');
  const [loading, setLoading] = useState(true);
  const [modName, setModName] = useState('ERROR');
  const [adminName, setAdminName] = useState('ERROR');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const name = localStorage.getItem('username');
    
    if (name) {
      fetch(`${ServerAPI.BaseURL}/modoruser`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
      })
        .then((res) => res.json())
        .then((data) => {
          if (data && data.message) {
            const message = data.message;
            
            if (message.includes('admin')) {
              setUserRole('admin');
              setAdminRole('Administrator');
              setAdminName(name);
              setStatus('Admin');
            } else if (message.includes('mod')) {
              setUserRole('mod');
              setModRole('Moderator');
              setModName(name);
              setStatus('Mod');
            } else if (message.includes('user')) {
              setUserRole('user');
              setStatus('User');
            }
          } else {
            setStatus('ERROR: Unable to fetch user role');
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching user role:', error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-gray-800">Account Settings</h2>
      <p className="text-gray-600 mt-2">Manage your account details and security preferences here.</p>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">Change Your Information</h3>
        <form className="mt-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Change Name</label>
            <input
              id="name"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="New Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Change Password</label>
            <input
              id="password"
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="New Password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 border border-gray-300 text-gray-800 font-semibold rounded-md flex items-center justify-between group hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200"
          >
            <span>Update Info</span>
            <span className="ml-2 text-xl text-gray-600 transform transition-transform duration-300 ease-in-out group-hover:scale-x-[-1]">
              &lt;
            </span>
          </button>
        </form>
      </div>

      {userRole === 'mod' && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800">Mod Settings</h3>
          <ul className="list-disc ml-6 text-gray-700">
            <li>
              <a href="/mod-menu" className="hover:text-gray-900">Go to Mod Menu</a>
            </li>
            <li>Mod Role: {modRole}</li>
            <li>Mod Name: {modName}</li>
          </ul>
        </div>
      )}

      {userRole === 'admin' && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800">Admin Settings</h3>
          <ul className="list-disc ml-6 text-gray-700">
            <li>
              <a href="/admin-menu" className="hover:text-gray-900">Go to Admin Menu</a>
            </li>
            <li>Admin Role: {adminRole}</li>
            <li>Admin Name: {adminName}</li>
          </ul>
        </div>
      )}

      {userRole === 'user' && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800">User Settings</h3>
          <p className="text-gray-700">Status: {status}</p>
        </div>
      )}
    </div>
  );
};

export default Account;
