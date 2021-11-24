import React from 'react'
import '../../BootstrapCSS/bootstrap.min.css'; 

import './NavBar.css';

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="20" alt="" loading="lazy"/>
                </a>
                <a class="navbar-brand" href="/">AST DBMS</a>

                <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link button-primary" href="/">Men</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link button-primary" href="/">Women</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link button-primary" href="/">Sale</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav d-flex flex-row me-1">
                        <li class="nav-item me-3 me-lg-0">
                            <a class="nav-link" href="/"><i class="fas fa-shopping-cart"></i></a>
                        </li>
                        <li class="nav-item me-3 me-lg-0">
                            <a class="nav-link" href="/"><i class="fab fa-twitter"></i></a>
                        </li>
                    </ul>
                    <div class="d-flex align-items-center">
                        <button type="button" class="btn btn-secondary px-3 me-2">Orders</button>
                        <button type="button" class="btn btn-primary me-3">Cart</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
