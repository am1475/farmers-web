import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import { CartProvider } from './components/CartContext';
import MessagePopup from './components/MessagePopup';
import Landing from './components/Landing';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <MessagePopup />
          <Routes>
            <Route path="/" element={<><Hero /><Services /><Testimonials /><Footer /></>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
