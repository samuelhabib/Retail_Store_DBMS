import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'animate.css';

import './LoadingScreen.css';

const LoadingScreen = () => {

    useEffect( () => {
        $(window).on('load',function(){
            setTimeout(function() {
                $('.main-loader').fadeOut('slow');
            }, 500);
        });
    }, []);


    return (
        <div class="main-loader">
            <span class="main-loader2"><span class="loader-inner"></span></span>
        </div>
    );
};

export default LoadingScreen;