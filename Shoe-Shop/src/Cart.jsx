// Cart.js
import React, { useState } from 'react';

const Cart = () => {
  // Sample cart items (replace with your actual cart data)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Shoe 1', price: 50 },
    { id: 2, name: 'Shoe 2', price: 65 },
    // Add more items as needed
  ]);

  // Calculate the total price of items in the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b border-gray-300 py-2">
              <div>
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p>${item.price}</p>
              </div>
              {/* Add a remove button or quantity selector here if needed */}
            </div>
          ))}
          
          <div className="mt-4">
            <h3 className="text-xl font-bold">Total: ${calculateTotal()}</h3>
          </div>

          <button
            className="bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-700"
            onClick={() => alert('Checkout functionality to be implemented')}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
