import React, { useState } from 'react'
import '../../BootstrapCSS/bootstrap.min.css';
import './Orders.css'; 
import NavBar from '../NavBar/NavBar'

export default function Orders() {
    
    const [orders] = useState([
        
          {
            order_ID: 12213,
            customer_id: 'AAAAA Battery',
            product_id: 299,
            name: "jacket",
            quantity: 1022,
            date: '10-10-2021',
          },
          
    ]);

    return (
        
        <div>
        <NavBar/>
     
        <div className = "table-responsive center order-bg" style={{width: 1000, }} >
        <h1>Orders:</h1>
        
        <div>
            <a className="btn btn-primary btn-rounded" href="/main">Back to shopping</a>
        </div>
      

        <table className="table table-striped table-bordered" width = "100">
            
            <thead className= "table-dark">
            <tr>
                    <th scope="col">Order #</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Product ID</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Date</th>
                
            </tr>
            </thead>
            <tbody>
            {orders.map((order) => (
            
                <tr>
                    <th scope="row">{order.order_ID}</th>
                    <th scope="row">{order.name}</th>
                    <th scope="row">{order.product_id}</th>
                    <th scope="row">{order.quantity}</th>
                    <th scope="row">{order.date}</th>
                </tr>
               
               
            ))}
            </tbody> 
           
        </table>
        
        </div>
        </div>
    );
}

