import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar'

export default function Cart() {
    const [cart , setCart] = useState([
        {
          category: "UTILITY",
          name: 'AA Battery',
          cost: 2.99,
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5-QAul_NfAs-s0XW9M087xWyPOGWvbfYjmqSl0QXabZRSYoid47i7kISiAteyIh0YOci5mtQ&usqp=CAc',
        },
        {
            category: "UTILITY",
            name: 'AA Battery',
            cost: 2.99,
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5-QAul_NfAs-s0XW9M087xWyPOGWvbfYjmqSl0QXabZRSYoid47i7kISiAteyIh0YOci5mtQ&usqp=CAc',
          },
    ]);
    const getTotalSum = () => {
    return cart.reduce(
      (sum, { cost, quantity }) => sum + cost * quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find(
      (item) => item.name === product.name
    ).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };

 const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };

  return (
    <>
      <h1>Cart</h1>
      {cart.length >= 0 && (
        <button onClick={clearCart}>Clear Cart</button>
      )}
      <div className="products card">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
          
            <h1>{product.name}</h1>
            <h4>{product.cost}</h4>
            <input
              value={product.quantity}
              onChange={(e) =>
                setQuantity(
                  product,
                  parseInt(e.target.value)
                )
              }
            />
            <img src={product.image} alt={product.name} />
            <button onClick={() => removeFromCart(product)}>
              Remove
            </button>
      
          </div>
        ))}
      </div>

      <div>Total Cost: {getTotalSum()}</div>
    </>
  );
}