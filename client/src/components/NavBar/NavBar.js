import React,{ useState }from 'react'
import '../../BootstrapCSS/bootstrap.min.css'; 

import './NavBar.css';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';




const NavBar = () => {
    const [cart, setCart] = useState([]);

    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark navbar-fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="20" alt="" loading="lazy"/>
                </a>
                <a className="navbar-brand" href="/">AST DBMS</a>

                <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link button-primary" href="/">Men</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link button-primary" href="/">Women</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link button-primary" href="/">Sale</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav d-flex flex-row me-1">
                        <li className="nav-item me-3 me-lg-0">
                            <a className="nav-link" href="/"><i className="fas fa-shopping-cart"></i></a>
                        </li>
                        <li className="nav-item me-3 me-lg-0">
                            <a className="nav-link" href="/"><i className="fab fa-twitter"></i></a>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center">
                    <a className="btn btn-primary btn-rounded" href="/">Orders</a>
          
                    <a className="btn btn-primary btn-rounded" href="/Cart">Cart</a>
                      
              
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
