import React, { useState, useEffect } from 'react';
import '../../BootstrapCSS/bootstrap.min.css';
import './Main.css';
import NavBar from '../NavBar/NavBar'
import Cart from "../Cart/Cart"


const Main = () => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState(0);
    const [userType, setUserType] = useState('');

    useEffect(() => {
        fetch("/getallproducts").then(res => res.json()).then(data => {
            setProducts(data);
        })

        fetch("/getusertype").then(res => res.json()).then(data => {
            setUserType(data['type']);
        })
    }, [])

    const handleCart = (e) => {
        const id = e.target.id
        if(cart.includes(id)){
            setCart(cart.filter(item => item !== id));
        } else{
            setCart([...cart, id]);
        }
    }

    const handleFilter = (e) => {
        fetch("/alterfilter", {
            method:"POST",
            cache: "no-cache",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify({categoryID: category})
        }).then(res => res.json()).then(data => {
            setProducts(data);
        })
    }

    return (
        <>
            <NavBar userType={userType}/>
            <div className="main-header">
                <h1>Products</h1>
                <h5>Select a category:</h5>
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option value='all'>All</option>
                    <option value='0'>Tshirt</option>
                    <option value='1'>Pants</option>
                    <option value='2'>Jacket</option>
                    <option value='3'>Sweater</option>
                    <option value='4'>Socks</option>
                </select>
                <br></br>
                <button type="button" onClick={handleFilter} className={`btn btn-outline-info`}>Apply Filter</button>
            </div>


            <div className="products">
                <div className="card-group card">
                    {products.map((product, id) => (
                        <div id="card-recipe" className="card shadow p-3 mb-5 bg-white rounded cards" key={id} style={{width: "20rem"}}>
                            {
                                (userType === 'admin') ? (
                                    <button id="x">X</button>
                                ) : null
                            }
                            <img className="card-img-top" src={product.picture} alt={product.productName} style={{height: "15rem"}} />
                            <div className="card-body">
                                <hr/>
                                <h5 className="card-title">{product.productName}</h5>
                                <h4 className="prod-category">{product.category}</h4>
                                <h4 className="price">$ {product.price} CAD</h4>
                                <h4 className="price">Amt. Available: {product.quantity}</h4>
                                {
                                    (userType !== 'admin') ? (
                                        (cart.includes(id.toString())) ? (
                                            <button type="button" id={id} onClick={handleCart} className={`btn btn-outline-info btn-recipe inner-button selected`}>Remove from Cart</button>
                                        ) : <button type="button" id={id} onClick={handleCart} className={`btn btn-outline-info btn-recipe inner-button`}>Add to Cart</button>
                                    ) : null
                                }
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}

export default Main;