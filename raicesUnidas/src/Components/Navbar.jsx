import React, { use, useState } from 'react'
import Logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'
const Navbar = () => {
    const [openLinks, setOpenLinks] = useState(false)
    const toggleNavBar = () => {
        setOpenLinks(!openLinks)
    }
    return (
        <div className='navbar'>
            <div className='leftSide' id={openLinks ? "open" : "close"}>
                <img src={Logo} />
                <div className='hiddenLinks'>
                    <Link to="/">Home</Link>
                    <Link to="/">Menu</Link>
                    <Link to="/">Información</Link>
                    <Link to="/">Contacto</Link>
                </div>
            </div>
            <div className='rightSide'>
                <Link to="/">Home</Link>
                <Link to="/">Menu</Link>
                <Link to="/">Información</Link>
                <Link to="/">Contacto</Link>
                <button onClick={toggleNavBar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    )
}

export default Navbar