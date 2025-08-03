import React, { use, useState, useEffect } from 'react'
import Logo from '../assets/LogoWeb.png'
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
                <a href="#inicio" onClick={handleSmoothScroll} className='logo-link'>
                    <img src={Logo} alt="Logo Raíces Unidas" />
                </a>
                <div className={`hiddenLinks ${openLinks ? 'active' : ''}`}>
                    <button className="closeButton" onClick={toggleNavBar}></button>
                    <div className="nav-item">
                        <a href="#inicio" onClick={handleSmoothScroll}>Inicio</a>
                    </div>
                    <div className="nav-item">
                        <a href="#informacion" onClick={handleSmoothScroll}>Acerca de mí</a>
                    </div>
                    <div className="nav-item">
                        <a href="#constelaciones" onClick={handleSmoothScroll}>Constelaciones</a>
                    </div>
                    <div className="nav-item">
                        <a href="#rituales" onClick={handleSmoothScroll}>Tarot y Rituales</a>
                    </div>
                    <div className="nav-item">
                        <a href="#consultas" onClick={handleSmoothScroll}>Consultas</a>
                    </div>
                    <div className="nav-item">
                        <a href="#testimonios" onClick={handleSmoothScroll}>Testimonios</a>
                    </div>
                    <div className="nav-item">
                        <a href="#contacto" onClick={handleSmoothScroll}>Contacto</a>
                    </div>


                </div>
            </div>
            <div className='rightSide'>
                <div className="nav-item">
                    <a href="#inicio" onClick={handleSmoothScroll}>Inicio</a>
                </div>
                <div className="nav-item">
                    <a href="#informacion" onClick={handleSmoothScroll}>Acerca de mí</a>
                </div>
                <div className="nav-item">
                    <a href="#constelaciones" onClick={handleSmoothScroll}>Constelaciones</a>
                </div>
                <div className="nav-item">
                    <a href="#rituales" onClick={handleSmoothScroll}>Tarot y Rituales</a>
                </div>
                <div className="nav-item">
                    <a href="#consultas" onClick={handleSmoothScroll}>Consultas</a>
                </div>
                <div className="nav-item">
                    <a href="#testimonios" onClick={handleSmoothScroll}>Testimonios</a>
                </div>
                <div className="nav-item">
                    <a href="#contacto" onClick={handleSmoothScroll}>Contacto</a>
                </div>

                <button onClick={toggleNavBar}>
                    <ReorderIcon />
                </button>
            </div>
            {openLinks && <div className="overlay" onClick={toggleNavBar}></div>}
        </div>
    )
}

export default Navbar