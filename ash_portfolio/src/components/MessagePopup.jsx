// MessagePopup.js
import React from 'react';
import { useCart } from './CartContext';

const MessagePopup = () => {
  const { message } = useCart();

  return (
    message && (
      <div className="fixed top-4 right-4 bg-green-500 text-white p-2 rounded">
        {message}
      </div>
    )
  );
};

export default MessagePopup;
