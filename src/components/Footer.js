import React from 'react';
import twitter from '../images/Twitter Icon.png';
import facebook from '../images/Facebook Icon.png';
import insta from '../images/Instagram Icon.png';
import link from '../images/Linkedin Icon.png';
import github from '../images/GitHub Icon.png';

export default function Footer(){
    return(
        <div className="Footer">
        <img src ={twitter} />
        <img src = {facebook} />
        <img src={insta} />
        <img src={link} />
        <img src={github} />
        </div>
    )
}