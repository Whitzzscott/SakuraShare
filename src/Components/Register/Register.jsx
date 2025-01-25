import React, { useState } from 'react';
import '../css/style.css';
import 'animate.css';
import { ServerAPI } from "../../Config/ServerAPI.js";
const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const usernameRegex = /^[a-zA-Z0-9_]+$/;

    if (!usernameRegex.test(username) || !usernameRegex.test(password)) {
      alert('Username and password must not contain spaces, periods, or special characters.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch(`${ServerAPI.login}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500">
      <div className="p-10 bg-white rounded-3xl shadow-xl w-full max-w-md animate__animated animate__fadeInUp">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6" style={{ fontFamily: 'Baloo, sans-serif' }}>
          Create a <span className="text-purple-600">BetterSakura</span> account
        </h1>
        
        <h1 className="text-lg text-center text-gray-600 mb-4">
          Note: You can use this account for Better Sakura Extensions
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">BetterSakura Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-base transition-all duration-200 ease-in-out transform hover:scale-105"
              placeholder="Enter your BetterSakura username"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-base transition-all duration-200 ease-in-out transform hover:scale-105"
              placeholder="Enter your password"
            />
          </div>
          
          {password && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-base transition-all duration-200 ease-in-out transform hover:scale-105"
                placeholder="Confirm your password"
              />
            </div>
          )}
          
          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent rounded-lg shadow-md text-base font-semibold text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 ease-in-out transform hover:scale-110"
            style={{ fontFamily: 'Baloo, sans-serif' }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
