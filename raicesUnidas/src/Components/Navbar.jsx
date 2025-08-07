import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Logo from '../assets/LogoWeb.png'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'

const Navbar = () => {
    const [openLinks, setOpenLinks] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();

    const toggleNavBar = () => {
        setOpenLinks(!openLinks)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 600 && openLinks) {
                setOpenLinks(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [openLinks]);

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        if (location.pathname === '/cart' && href.startsWith('/#')) {
            // Extraemos la sección del hash
            const section = href.split('#')[1];
            // Navegamos a home y pasamos la sección en state para hacer scroll luego
            navigate('/', { state: { scrollTo: section } });
            setOpenLinks(false);
        } else if (href.startsWith('#')) {
            // Scroll smooth en la misma página
            const section = href.substring(1);
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            setOpenLinks(false);
        } else {
            // Navegación normal para otras rutas
            navigate(href);
            setOpenLinks(false);
        }
    };

    const getLinkHref = (sectionId) => {
        if (location.pathname === '/cart') {
            return `/#${sectionId}`;
        }
        return `#${sectionId}`;
    };

    const sections = [
        { id: 'inicio', label: 'Inicio' },
        { id: 'informacion', label: 'Acerca de mí' },
        { id: 'constelaciones', label: 'Constelaciones' },
        { id: 'rituales', label: 'Tarot y Rituales' },
        { id: 'consultas', label: 'Consultas' },
        { id: 'testimonios', label: 'Testimonios' },
        { id: 'contacto', label: 'Contacto' },
    ];

    return (
        <div className='navbar'>
            <div className='leftSide' id={openLinks ? "open" : "close"}>
                <a
                    href={getLinkHref('inicio')}
                    onClick={(e) => handleLinkClick(e, getLinkHref('inicio'))}
                    className='logo-link'
                >
                    <img src={Logo} alt="Logo Raíces Unidas" />
                </a>
                <div className={`hiddenLinks ${openLinks ? 'active' : ''}`}>
                    <button className="closeButton" onClick={toggleNavBar}></button>
                    {sections.map(({ id, label }) => (
                        <div key={id} className="nav-item">
                            <a href={getLinkHref(id)} onClick={(e) => handleLinkClick(e, getLinkHref(id))}>
                                {label}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className='rightSide'>
                {sections.map(({ id, label }) => (
                    <div key={id} className="nav-item">
                        <a href={getLinkHref(id)} onClick={(e) => handleLinkClick(e, getLinkHref(id))}>
                            {label}
                        </a>
                    </div>
                ))}
                <button onClick={toggleNavBar}>
                    <ReorderIcon />
                </button>
            </div>
            {openLinks && <div className="overlay" onClick={toggleNavBar}></div>}
        </div>
    )
}

export default Navbar
