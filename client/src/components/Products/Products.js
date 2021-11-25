import React, { useState } from 'react';
import '../../BootstrapCSS/bootstrap.min.css';
import './Products.css'; 
import NavBar from '../NavBar/NavBar'
import Cart from "../Cart/Cart"
const HOME_GARDEN = 'home and garden';
const UTILITY = 'utility';



export default function Products() {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    {
      category: UTILITY,
      name: 'AA Battery',
      cost: 2.99,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5-QAul_NfAs-s0XW9M087xWyPOGWvbfYjmqSl0QXabZRSYoid47i7kISiAteyIh0YOci5mtQ&usqp=CAc',
    },
    {
        category: UTILITY,
        name: 'AA Battery',
        cost: 2.99,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5-QAul_NfAs-s0XW9M087xWyPOGWvbfYjmqSl0QXabZRSYoid47i7kISiAteyIh0YOci5mtQ&usqp=CAc',
      },
      {
        category: UTILITY,
        name: 'AA Battery',
        cost: 2.99,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5-QAul_NfAs-s0XW9M087xWyPOGWvbfYjmqSl0QXabZRSYoid47i7kISiAteyIh0YOci5mtQ&usqp=CAc',
      },
      {
        category: UTILITY,
        name: 'AA Battery',
        cost: 2.99,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5-QAul_NfAs-s0XW9M087xWyPOGWvbfYjmqSl0QXabZRSYoid47i7kISiAteyIh0YOci5mtQ&usqp=CAc',
      },
      {
      category: UTILITY,
      name: 'AA Battery',
      cost: 2.99,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5-QAul_NfAs-s0XW9M087xWyPOGWvbfYjmqSl0QXabZRSYoid47i7kISiAteyIh0YOci5mtQ&usqp=CAc',
    },
    {
      category: HOME_GARDEN,
      name: 'Blanket',
      cost: 19.99,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpwdYDmUL_ZEqhLV7ZWRdQAU7DGcGaxtCt7SrTlL9umrQs2Un7rj9Nbb9Vq01RtEfA0eAVmdt-&usqp=CAc',
    },
    {
        category: HOME_GARDEN,
        name: 'Blanket',
        cost: 19.99,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpwdYDmUL_ZEqhLV7ZWRdQAU7DGcGaxtCt7SrTlL9umrQs2Un7rj9Nbb9Vq01RtEfA0eAVmdt-&usqp=CAc',
    },
    {
        category: HOME_GARDEN,
        name: 'Blanket',
        cost: 19.99,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpwdYDmUL_ZEqhLV7ZWRdQAU7DGcGaxtCt7SrTlL9umrQs2Un7rj9Nbb9Vq01RtEfA0eAVmdt-&usqp=CAc',
    },
    {
        category: HOME_GARDEN,
        name: 'Blanket',
        cost: 19.99,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpwdYDmUL_ZEqhLV7ZWRdQAU7DGcGaxtCt7SrTlL9umrQs2Un7rj9Nbb9Vq01RtEfA0eAVmdt-&usqp=CAc',
    },
    {
        category: HOME_GARDEN,
        name: 'Blanket',
        cost: 19.99,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpwdYDmUL_ZEqhLV7ZWRdQAU7DGcGaxtCt7SrTlL9umrQs2Un7rj9Nbb9Vq01RtEfA0eAVmdt-&usqp=CAc',
    },
    {
        category: HOME_GARDEN,
        name: 'Blanket',
        cost: 19.99,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpwdYDmUL_ZEqhLV7ZWRdQAU7DGcGaxtCt7SrTlL9umrQs2Un7rj9Nbb9Vq01RtEfA0eAVmdt-&usqp=CAc',
    },
    {
        category: HOME_GARDEN,
        name: 'Blanket',
        cost: 19.99,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpwdYDmUL_ZEqhLV7ZWRdQAU7DGcGaxtCt7SrTlL9umrQs2Un7rj9Nbb9Vq01RtEfA0eAVmdt-&usqp=CAc',
    },
    {
        category: HOME_GARDEN,
        name: 'Blanket',
        cost: 19.99,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpwdYDmUL_ZEqhLV7ZWRdQAU7DGcGaxtCt7SrTlL9umrQs2Un7rj9Nbb9Vq01RtEfA0eAVmdt-&usqp=CAc',
    },
    
  ]);

    const getCartTotal = () => {
        return cart.reduce(
            (sum, {quantity}) => sum + quantity,
            0
        );
    };

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const [category, setCategory] = useState(HOME_GARDEN);

  const getProductsInCategory = () => {
    return products.filter(
      (product) => product.category === category
    );
  };

  return (
    <>
    <NavBar/>
     <h1>Products</h1>
      Select a category
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value={HOME_GARDEN}>{HOME_GARDEN}</option>
        <option value={UTILITY}>{UTILITY}</option>
      </select>
      <div className="products">  
        <div className = "card-group card">
                  
        {getProductsInCategory().map((product, idx) => (
          <div className="product" key={idx}>
                <div className = "card">
                    <div className="card-body">
            
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={product.image} alt={product.name}/>
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            
            </div>
            </div>
          </div>
        ))}
       
        </div>
        
        </div>
        <div>
        </div>
    </>
    

  );
}