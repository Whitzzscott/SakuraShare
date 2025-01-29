import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineWarning } from "react-icons/ai";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    const sessionToken = localStorage.getItem("SessionToken");
    const loginToken = localStorage.getItem("LoginToken");

    window.history.replaceState(null, null, "/404");

    if (sessionToken && loginToken) {
      navigate("/Home");
    } else {
      navigate("/Preview");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white text-center">
      <AiOutlineWarning size={80} className="animate__animated animate__bounceIn mb-6" />
      <h1 className="text-5xl font-extrabold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">Oops! The page you're looking for doesn't exist.</p>
      <button
        onClick={handleGoBack}
        className="bg-white text-gray-800 py-2 px-6 rounded-full text-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
