import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'animate.css';
import '../../BootstrapCSS/bootstrap.min.css';

import './Register.css';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passConfirm, setPassConfirm] = useState('');

    useEffect( () => {
        $(window).on('load', function(){
            setTimeout(function() {
                $('.login-form').fadeIn('slow');
            }, 750);
        });
    }, []);

    return (
        <div className="register-body">
            <LoadingScreen/>
            <div className="login-form" style={{display: "none"}}>
                <form className="container" action="/" method="post">
                    <h1>Register</h1>
                    <hr/>
                        
                    <div className="form-group">
                        <label htmlFor="username"><b>Username</b></label>
                        <input id="username-check" type="text" placeholder="Enter Username" name="username" class="form-control" onChange={ (event) => setUsername(event.target.value) } required autoFocus/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password"><b>Password</b></label>
                        <input id="pass" type="password" placeholder="Enter Password" name="password" class="form-control" onChange={ (event) => setPassword(event.target.value) } required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password"><b>Confirm Password</b></label>
                        <input id="pass-confirm" type="password" placeholder="Confirm Password" name="confirmation" class="form-control" onChange={ (event) => setPassConfirm(event.target.value) } required/>
                    </div>

                    <div id="selection-user" className="form-group">
                        <label htmlFor="pick-user"><b>Pick Type of User</b></label>
                        <select id="pick-user" className="form-control" name="pick-user">
                            <option selected value="Customer">Customer</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>

                    <Link onClick={ event => ((!username) || (!password) || (!passConfirm)) ? event.preventDefault() : null} to={'/Main'}>
                        <button id="register" className="btn btn-primary btn-rounded" type="submit">Register</button>
                    </Link>
                    <hr/>
                    <a className="btn btn-primary btn-rounded" href="/">Login!</a>
                </form>
            </div>
        </div>

    );
};

export default Register;