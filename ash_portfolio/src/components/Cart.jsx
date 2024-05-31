// src/components/Cart.jsx
import React, { useState } from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    if (deliveryAddress && paymentMethod) {
      if (paymentMethod === 'UPI' && !upiId) {
        alert('Please enter your UPI ID.');
        return;
      }
      if (paymentMethod === 'Card' && !cardNumber) {
        alert('Please enter your Card Number.');
        return;
      }
      // Implement order placement logic here
      setOrderPlaced(true);
    } else {
      alert('Please enter a delivery address and select a payment method.');
    }
  };

  return (
    <section id="cart" className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cart.map((item, index) => (
                <div key={index} className="bg-white shadow-lg p-4 rounded-lg">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover mb-4 rounded" />
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-lg text-green-600 font-semibold mb-2">${item.price}</p>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => removeFromCart(item)}
                    >
                      Remove
                    </button>
                    <div className="flex items-center">
                      <button
                        className="bg-gray-200 text-gray-800 px-2 py-1 rounded"
                        onClick={() => updateQuantity(item, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="bg-gray-200 text-gray-800 px-2 py-1 rounded"
                        onClick={() => updateQuantity(item, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Price Details</h3>
              <div className="flex justify-between mb-2">
                <span>Total Amount</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              {paymentMethod === 'COD' && (
                <div className="flex justify-between mb-2">
                  <span>Cash on Delivery Fee</span>
                  <span>$5.00</span>
                </div>
              )}
              <div className="flex justify-between mb-2 font-bold">
                <span>Final Amount</span>
                <span>${(totalAmount + (paymentMethod === 'COD' ? 5 : 0)).toFixed(2)}</span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold mb-2">Delivery Address</h3>
                <textarea
                  className="w-full p-2 border rounded"
                  rows="3"
                  placeholder="Enter your delivery address"
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold mb-2">Payment Method</h3>
                <div className="flex flex-col space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="COD"
                      checked={paymentMethod === 'COD'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span className="ml-2">Cash on Delivery (+₹5.00)</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="UPI"
                      checked={paymentMethod === 'UPI'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span className="ml-2">UPI</span>
                  </label>
                  {paymentMethod === 'UPI' && (
                    <input
                      type="text"
                      className="mt-2 p-2 border rounded"
                      placeholder="Enter your UPI ID"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                    />
                  )}
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Card"
                      checked={paymentMethod === 'Card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span className="ml-2">Card Payment</span>
                  </label>
                  {paymentMethod === 'Card' && (
                    <input
                      type="text"
                      className="mt-2 p-2 border rounded"
                      placeholder="Enter your Card Number"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                    />
                  )}
                </div>
              </div>
              <button
                className="mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded w-full"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
              {orderPlaced && (
                <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                  <span className="block sm:inline">Order placed successfully!</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
