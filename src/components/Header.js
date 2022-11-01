import React from 'react';
import Girl from '../images/Rectangle 90.png';
import styles from '../style.css';

export default function Header(){
    return(
        <div className="container1">
          <img src={Girl} className="girlimg" />
        </div>
    )
}