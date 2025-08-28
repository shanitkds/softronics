import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // stop form reload
    console.log("Login Info:", { email, password });
    navigation("/home");
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg"
      >
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#1a1818] text-white py-2 rounded-lg font-semibold hover:bg-black transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </motion.div>

      {/* About Shop Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-2xl mt-10 text-center"
      >
        <h3 className="text-xl font-bold text-gray-800 mb-3">About Our Tailoring Shop</h3>
        <p className="text-gray-600 leading-relaxed">
          At <span className="font-semibold">Aboodha Tailors</span>, we specialize in 
          crafting premium thobes, custom-fit dresses, and elegant traditional wear.
          With years of experience and dedication, we ensure every piece is stitched
          with perfection, style, and comfort. Your satisfaction is our priority.
        </p>
      </motion.div>
    </div>
  );
}

export default Login;
