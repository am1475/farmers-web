// src/components/Landing.jsx
import React from 'react';
import { useCart } from './CartContext';
import logo1 from './t1.jpeg';
import logo2 from './s1.jpg';
import logo3 from './w1.jpg';

const Landing = () => {
  const { addToCart } = useCart();

  const products = [
    { name: 'Tractor', price: 15000, description: 'High efficiency tractor for all your farming needs.', imageUrl: logo1 },
    { name: 'Seed Drill', price: 5000, description: 'Precision seed drill for optimal planting.', imageUrl: logo2 },
    { name: 'Fertilizer', price: 200, description: 'Organic fertilizer for better crop yield.', imageUrl: logo3 }
  ];

  return (
    <section id="products" className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white shadow-lg p-4 rounded-lg">
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-lg text-green-600 font-semibold mb-2">${product.price}</p>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <button 
                onClick={() => addToCart(product)} 
                className="mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Landing;
