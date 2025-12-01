import React, { useState } from "react";

const AdminLogin = ({ onSuccess }) => {
  const [password, setPassword] = useState("");

  const correctPassword = "9999067526"; // CHANGE THIS

  const handleLogin = () => {
    if (password === correctPassword) {
      onSuccess(); 
    } else {
      alert("Wrong password!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-xl rounded-xl w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>

        <input
          type="password"
          placeholder="Enter Admin Password"
          className="w-full border p-3 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white p-3 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
