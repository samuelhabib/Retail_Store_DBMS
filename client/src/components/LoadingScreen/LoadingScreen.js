import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import $ from 'jquery';
import 'animate.css';

import './LoadingScreen.css';

const LoadingScreen = () => {

    useEffect( () => {
        $(window).on('load',function(){
            setTimeout(function() {
                $('.main-loader').fadeOut('slow');
            }, 750);
        });

        return () => {
            console.log("unmounted");
        };
    }, []);


    return (
        <div className="main-loader">
            <span className="main-loader2"><span className="loader-inner"></span></span>
        </div>
    );
};

export default LoadingScreen;