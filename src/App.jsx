import React, { useEffect, useState } from "react"; 
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Preview from "./components/Home/Preview/Preview.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import Home from "./components/Home/Home.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx"; 
import ServerAPI from "./Config/ServerAPI.jsx";
import Setting from "./Components/Home/Setting/Settings.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [sessionToken, setSessionToken] = useState(localStorage.getItem("SessionToken"));
  const [loginToken, setLoginToken] = useState(localStorage.getItem("LoginToken"));
  const username = localStorage.getItem("username");

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const apiUrl = `${ServerAPI.BaseURL}/tokens`;
        
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username })
        });

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();

        if (data.sessionId && data.token) {
          localStorage.setItem("SessionToken", data.token);
          localStorage.setItem("LoginToken", data.token);
          setSessionToken(data.token);
          setLoginToken(data.token);
        } else {
          setSessionToken(null);
          setLoginToken(null);
        }
      } catch (error) {
        console.error("Error fetching tokens:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTokens();
  }, [username]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="w-20 h-20 border-4 border-t-4 border-white border-solid rounded-full animate__animated animate__spin infinite animate__delay-1s animate__infinite animate__bounceIn"></div>
        <p className="text-2xl font-semibold text-white animate__animated animate__fadeIn animate__delay-1s">
          Loading...
        </p>
      </div>
    </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {sessionToken && loginToken ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/settings" element={<Setting />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Preview" element={<Preview />} />
            <Route path="/Home" element={<Home />} />
          </>
        ) : (
          <>
            <Route path="/Preview" element={<Preview />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
        
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;