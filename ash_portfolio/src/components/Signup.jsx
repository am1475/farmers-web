// src/components/Signup.jsx
import React, { useState } from 'react';
import { auth, provider } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Signup successful');
      navigate('/login');
    } catch (error) {
      console.error('Error signing up:', error);
      alert(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert('Signup with Google successful');
      navigate('/login');
    } catch (error) {
      console.error('Error with Google signup:', error);
      alert(error.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-green-600 text-center">Signup</h2>
        <form onSubmit={handleSignup}>
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
          <button className="w-full px-4 py-2 bg-green-600 text-white rounded">Signup</button>
        </form>
        <button
          onClick={handleGoogleSignup}
          className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
