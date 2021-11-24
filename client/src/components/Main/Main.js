import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'animate.css';
import '../../BootstrapCSS/bootstrap.min.css';

import './Main.css';
// import LoadingScreen from '../LoadingScreen/LoadingScreen';
import NavBar from '../NavBar/NavBar';


const Main = () => {
    const[data, setData] = useState([{}])

    useEffect (() => {
    
        fetch("/tshirts").then(
            res => res.json()
        ).then(
    
            data =>{
                setData(data)
                console.log(data)
            }
        )
    }, [])


    return (
        <div>
        <NavBar/>
        {(typeof data.tshirts === 'undefined') ? (
  
          <p>Loading ...</p>
        ) : (
          data.tshirts.map((tshirt,i) => (
            <p key={i}>{tshirt}</p>
          ))
        )}
        
      </div>
    );
};

export default Main;