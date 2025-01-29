import React, { useState } from 'react'; 
import '../css/style.css';
import 'animate.css';
import { Link } from 'react-router-dom';
import ServerAPI from "../../Config/ServerAPI.js";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const usernameRegex = /^[a-zA-Z0-9_]+$/;

    if (!usernameRegex.test(username) || !usernameRegex.test(password)) {
      alert('Username and password must not contain spaces, periods, or special characters.');
      return;
    }

    try {
      const response = await fetch(`${ServerAPI.BaseURL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      if (data.username) {
        localStorage.setItem("username", data.username);
      }

      window.location.href = "/home";

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500">
      <div className="p-10 bg-white rounded-3xl shadow-xl w-full max-w-md animate__animated animate__fadeInUp">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6" style={{ fontFamily: 'Baloo, sans-serif' }}>
          Please use your own <span className="text-purple-600">BetterSakura</span> account. Not Google account nor Sakura, only BetterSakura.
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
              className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-base transition duration-200 ease-in-out transform hover:scale-105"
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
              className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-base transition duration-200 ease-in-out transform hover:scale-105"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent rounded-lg shadow-md text-base font-semibold text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-200 ease-in-out transform hover:scale-105"
            style={{ fontFamily: 'Baloo, sans-serif' }}
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Not yet registered? 
            <Link to="/register" className="text-purple-600 font-semibold hover:text-purple-700 transition duration-200">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
