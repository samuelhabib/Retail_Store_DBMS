import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'animate.css';
import '../../BootstrapCSS/bootstrap.min.css';

import './Login.css';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect( () => {
        $(window).on('load', function(){
            setTimeout(function() {
                $('.login-form').fadeIn('slow');
            }, 500);
        });
    }, []);

    return (
        <div className="login-body">
            <LoadingScreen/>
            <div className="login-form" style={{display: "none"}}>
                <form className="container" action="/" method="post">
                    <h1>Login</h1>
                        
                    <div className="form-group">
                        <label htmlFor="username"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="username" className="form-control" onChange={ (event) => setUsername(event.target.value) } required autoFocus/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" className="form-control" onChange={ (event) => setPassword(event.target.value) } required/>
                    </div>

                    <Link onClick={ event => ((!username) || (!password)) ? event.preventDefault() : null} to={'/Main'}>
                        <button type="submit" className="btn btn-primary btn-rounded" style={{borderRadius: "20px"}}>Login</button>
                    </Link>

                    <hr/>
                    <a className="btn btn-primary btn-rounded" href="/register">Register here!</a>
                </form>
            </div>
        </div>

    );
};

export default Login;