import React, { use, useState, useEffect } from 'react'
import Logo from '../assets/logo.jpg'
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
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleSmoothScroll = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href').substring(1); // quita el "#"
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className='navbar'>
            <div className='leftSide' id={openLinks ? "open" : "close"}>
                <img src={Logo} />
                <div className={`hiddenLinks ${openLinks ? 'active' : ''}`}>
                    <button className="closeButton" onClick={toggleNavBar}></button>
                    <a href="#inicio" onClick={handleSmoothScroll}>Inicio</a>
                    <a href="#rituales" onClick={handleSmoothScroll}>Rituales</a>
                    <a href="#informacion" onClick={handleSmoothScroll}>Acerca de mí</a>
                    <a href="#constelaciones" onClick={handleSmoothScroll}>Constelaciones</a>
                    <a href="#consultas" onClick={handleSmoothScroll}>Consultas</a>
                    <a href="#testimonios" onClick={handleSmoothScroll}>Testimonios</a>
                    <a href="#contacto" onClick={handleSmoothScroll}>Contacto</a>

                </div>
            </div>
            <div className='rightSide'>
                <a href="#inicio" onClick={handleSmoothScroll}>Inicio</a>
                <a href="#rituales" onClick={handleSmoothScroll}>Rituales</a>
                <a href="#informacion" onClick={handleSmoothScroll}>Acerca de mí</a>
                <a href="#constelaciones" onClick={handleSmoothScroll}>Constelaciones</a>
                <a href="#consultas" onClick={handleSmoothScroll}>Consultas</a>
                <a href="#testimonios" onClick={handleSmoothScroll}>Testimonios</a>
                <a href="#contacto" onClick={handleSmoothScroll}>Contacto</a>
                <button onClick={toggleNavBar}>
                    <ReorderIcon />
                </button>
            </div>
            {openLinks && <div className="overlay" onClick={toggleNavBar}></div>}
        </div>
    )
}

export default Navbar