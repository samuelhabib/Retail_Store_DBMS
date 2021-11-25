import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar'
import "./Cart.css";

export default function Cart() {
    const [cart , setCart] = useState([
        {
          category: "UTILITY",
          name: 'AA Battery',
          cost: 2.99,
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5-QAul_NfAs-s0XW9M087xWyPOGWvbfYjmqSl0QXabZRSYoid47i7kISiAteyIh0YOci5mtQ&usqp=CAc',
          quantity: 4,
        },
        {
            category: "UTILITY",
            name: 'AA assa',
            cost: 3.99,
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5-QAul_NfAs-s0XW9M087xWyPOGWvbfYjmqSl0QXabZRSYoid47i7kISiAteyIh0YOci5mtQ&usqp=CAc',
            quantity: 1,
          },
          {
            category: "UTILITY",
            name: 'AA asdsadssa',
            cost: 3.99,
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5-QAul_NfAs-s0XW9M087xWyPOGWvbfYjmqSl0QXabZRSYoid47i7kISiAteyIh0YOci5mtQ&usqp=CAc',
            quantity: 1,
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
   <div>
       
    <div class="row no-gutters center">
            <div>
                <a className="btn btn-primary btn-rounded" href="/main">Back to shopping</a>
            </div>
        <div class="col-md-8">
           
            <div class="product-details mr-2 bod">

                
                <h1 class="mb-0">Shopping cart</h1>
                <p></p>
              
                
                <div className="products">
                              {cart.map((product, idx) => (
                                  <div className="product shadow" key={idx}>
                                    <div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                                      <div class="d-flex flex-row"><img class="rounded" src={product.image} width = "100"/><i class="fa fa-trash-o ml-3 text-black-50"></i></div>
                                      <div class="ml-2"><span class="font-weight-bold d-block">{product.name}</span></div>
                                      
                                      <span class="d-block ml-5 font-weight-bold">{product.cost}</span>

                                      <div class="ml-2"><span class="font-weight-bold d-block">{product.quantity}</span>
                                            
                                          
                                          </div>
                                      
                                      	
                                      <button onClick={() => removeFromCart(product)}>
                                          Remove
                                      </button>
                                      </div>
                                  </div>
                              ))}
                          </div>
    
                <div><h3 className="center">Total Cost: {getTotalSum()}</h3></div>

        </div>
        </div>
        <div class="col-md-4">
        <div class="payment-info">
                <div class="d-flex justify-content-between align-items-center"><h4>Card details</h4></div>
                <span class="type d-block mt-3 mb-1">Card type</span><label class="radio"> <input type="radio" name="card" value="payment" checked/> <span><img width="30" src="https://img.icons8.com/color/48/000000/mastercard.png"/></span> </label>
                <label class="radio"> <input type="radio" name="card" value="payment"/> <span><img width="30" src="https://img.icons8.com/officel/48/000000/visa.png" /></span> </label>
                <label class="radio"> <input type="radio" name="card" value="payment"/> <span><img width="30" src="https://img.icons8.com/ultraviolet/48/000000/amex.png" /></span> </label>
                <label class="radio"> <input type="radio" name="card" value="payment"/> <span><img width="30" src="https://img.icons8.com/officel/48/000000/paypal.png" /></span> </label>
                
                <div><label class="credit-card-label">Name on card</label><input type="text" class="form-control credit-inputs" placeholder="Name"/></div>
                <div><label class="credit-card-label">Card number</label><input type="text" class="form-control credit-inputs" placeholder="0000 0000 0000 0000"/></div>
                
                <div class="row">
                    <div class="col-md-6"><label class="credit-card-label">Date</label><input type="text" class="form-control credit-inputs" placeholder="12/24"/></div>
                    <div class="col-md-6"><label class="credit-card-label">CVV</label><input type="text" class="form-control credit-inputs" placeholder="342"/></div>
                </div>

                <hr class="line"/>
                <div class="d-flex justify-content-between information"><span>Subtotal</span><span>{getTotalSum()}</span></div>
                <div class="d-flex justify-content-between information"><span>Total(Incl. taxes 13%)</span><span>{getTotalSum()*1.13}</span></div><button class="btn btn-primary btn-block d-flex justify-content-between mt-3" type="button">
                <span>Checkout<i class="fa fa-long-arrow-right ml-1"></i></span></button>
            </div>
        </div>
        </div>
   
            
    </div>
    


  );
}