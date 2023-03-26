import { React, useState, Component} from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import '../css/App.css'
import '../css/Welcome.css'

import earth from "../assets/earth-svgrepo-com.svg"
import jupiter from "../assets/jupiter-svgrepo-com.svg"
import mars from "../assets/mars-svgrepo-com.svg"
import mercury from "../assets/mercury-svgrepo-com.svg"
import moon from "../assets/moon-svgrepo-com.svg"
import neptune from "../assets/neptune-svgrepo-com.svg"
import saturn from "../assets/saturn-svgrepo-com.svg"
import uranus from "../assets/uranus-svgrepo-com.svg"
import venus from "../assets/venus-svgrepo-com.svg"

export function Welcome() {
    const [searchParams] = useSearchParams();

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/TopSongs`; 
        navigate(path);
    }

    if (!searchParams.has('access_token') || !searchParams.has('refresh_token') || !searchParams.has('state'))
    {
        return (
            <div className="App">
                <div className='center'>
                
                <h1>Access not granted!</h1>
                    
                </div>
        </div>
        )
    }

    return (
        <div onClick={routeChange} onDragExit={routeChange} className="App next">
            <div >
            <img src={saturn} className="planets saturn "></img>
            <img src={earth} className="planets earth"></img>
            <img src={moon} className="planets moon"></img>
            </div>
            <img src={neptune} className="planets neptune"></img>
            <div className="heading">
            <img src={jupiter} className="planets jupiter"></img>
                <h1>Ready? Let's dive in!</h1>
                <img src={mars} className="planets mars"></img>
            </div>
            <img src={mercury} className="planets mercury"></img>
            <img src={uranus} className="planets uranus"></img>
                <img src={venus} className="planets venus"></img>
        </div>
      )
}
