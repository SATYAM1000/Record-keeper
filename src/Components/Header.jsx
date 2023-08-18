import React from 'react';
import './Header.css'

const Header=()=>{
    return(
        <div className='Header'>
            <div><h1>Record Keeper</h1></div>
            <div className='list'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div className='button'>
                <button type="button" className='btn'>Records</button>
            </div>
        </div>
    )
}
export default Header;