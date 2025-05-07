import React, { use, useState, useEffect } from 'react'
import Logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'
const Navbar = () => {
    const [openLinks, setOpenLinks] = useState(false)
    const toggleNavBar = () => {
        setOpenLinks(!openLinks)
    }
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 600 && openLinks) {
                setOpenLinks(false); // cerrar si el menú estaba abierto
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [openLinks]);
    return (
        <div className='navbar'>
            <div className='leftSide' id={openLinks ? "open" : "close"}>
                <img src={Logo} />
                <div className={`hiddenLinks ${openLinks ? 'active' : ''}`}>
                    <button className="closeButton" onClick={toggleNavBar}>×</button>
                    <Link to="/">Inicio</Link>
                    <Link to="/">Constelaciones Familiares</Link>
                    <Link to="/">Acerca de mí</Link>
                    <Link to="/">Consultas</Link>
                    <Link to="/">Testimonios</Link>
                    <Link to="/">Contacto</Link>
                </div>
            </div>
            <div className='rightSide'>
                <Link to="/">Inicio</Link>
                <Link to="/">Constelaciones Familiares</Link>
                <Link to="/">Acerca de mí</Link>
                <Link to="/">Consultas</Link>
                <Link to="/">Testimonios</Link>
                <Link to="/">Contacto</Link>
                <button onClick={toggleNavBar}>
                    <ReorderIcon />
                </button>
            </div>
            {openLinks && <div className="overlay" onClick={toggleNavBar}></div>}
        </div>
    )
}

export default Navbar