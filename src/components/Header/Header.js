import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <h1 className='header-title' style={{color: '#025205'}}>Guiter's Store</h1>
            <h3 className='mini-header' style={{color: '#6B2202', fontSize: '25px'}}>Take whatever you like</h3>
        </div>
    );
};

export default Header;