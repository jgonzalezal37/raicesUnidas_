import React from 'react'
import Logo from '../assets/logo.jpg'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='leftside'>
                <img src={Logo} />
            </div>
            <div className='rightside'></div>
        </div>
    )
}

export default Navbar