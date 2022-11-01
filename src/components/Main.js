import React from 'react';
import styles from '../style.css';


export default function Main(){
    return(
        <div className="main">
           <h2 className="name">Laura Smith</h2>
           <h3 className="skill">Frontend Developer</h3>
           <a href="#" className="site">laurasmith.website</a>
           <button className="email-btn">Email</button>
        </div>
    )
}