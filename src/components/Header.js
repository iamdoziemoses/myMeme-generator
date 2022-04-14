import React, { Component } from 'react';
import './Header.css';

const Header = () => {
    return ( 
        <div className='header-container'>
            <img src="https://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
                alt="Problem?" width="200"/>
            <p>Meme <br/>Generator</p>
        </div>
     );
}
 
export default Header;