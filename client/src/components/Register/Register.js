import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import $ from 'jquery';
import 'animate.css';
import '../../BootstrapCSS/bootstrap.min.css';

import './Register.css';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passConfirm, setPassConfirm] = useState('');
    const [address, setAddress] = useState('NULL');
    const [phone, setPhone] = useState(0);
    const [userType, setUserType] = useState('customer');
    const history = useHistory();

    useEffect( () => {
        $(window).on('load', function(){
            setTimeout(function() {
                $('.login-form').fadeIn('slow');
            }, 750);
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/register", {
            method:"POST",
            cache: "no-cache",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify({username: username, password: password, address:address, phone:phone, userType: userType})
        }).then(res => res.json()).then(res => {
            if(res['alert'] === 'success'){
                history.push("/main");
            }
        })
    };

    return (
        <div className="register-body">
            <LoadingScreen/>
            <div className="login-form" style={{display: "none"}}>
                <form onSubmit={handleSubmit} className="container" action="/main" method="get">
                    <h1>Register</h1>
                    <hr/>
                        
                    <div className="form-group">
                        <label htmlFor="username"><b>Username</b></label>
                        <input id="username-check" type="text" placeholder="Enter Username" name="username" className="form-control" onChange={ (event) => setUsername(event.target.value) } required autoFocus/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password"><b>Password</b></label>
                        <input id="pass" type="password" placeholder="Enter Password" name="password" className="form-control" onChange={ (event) => setPassword(event.target.value) } required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password"><b>Confirm Password</b></label>
                        <input id="pass-confirm" type="password" placeholder="Confirm Password" name="confirmation" className="form-control" onChange={ (event) => setPassConfirm(event.target.value) } required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="address"><b>Address</b></label>
                        <input id="pass-confirm" type="text" placeholder="Address" name="confirmation" className="form-control" onChange={ (event) => setAddress(event.target.value) }/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password"><b>Phone Number</b></label>
                        <input id="pass-confirm" type="text" placeholder="Phone Number" name="confirmation" className="form-control" onChange={ (event) => setPhone(event.target.value) }/>
                    </div>

                    <div id="selection-user" className="form-group">
                        <label htmlFor="pick-user"><b>Pick Type of User</b></label>
                        <select id="pick-user" className="form-control" name="pick-user" onChange={ (event) => setUserType(event.target.value) }>
                            <option value="Customer">Customer</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                    {
                        (username && (password === passConfirm) && (password !== "")) ? (
                            <button id="register" className="btn btn-primary btn-rounded" type="submit">Register</button>
                        ) : (
                            <button id="register" className="btn btn-primary btn-rounded" type="submit" disabled>Register</button>
                        )
                    }

                    <hr/>
                    <a className="btn btn-primary btn-rounded" href="/">Login!</a>
                </form>
            </div>
        </div>

    );
};

export default Register;