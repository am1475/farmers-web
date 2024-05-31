// src/components/Login.jsx
import React, { useState } from 'react';
import { auth, provider } from '../firebaseConfig';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful');
      navigate('/landing');
    } catch (error) {
      console.error('Error logging in:', error);
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert('Login with Google successful');
      navigate('/landing');
    } catch (error) {
      console.error('Error with Google login:', error);
      alert(error.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-green-600 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-left mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="w-full px-4 py-2 bg-green-600 text-white rounded">Login</button>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
