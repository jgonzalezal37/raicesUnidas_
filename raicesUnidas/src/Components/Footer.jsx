import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faThreads } from '@fortawesome/free-brands-svg-icons'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <a href="https://www.instagram.com/raicesunidas_?igsh=eWs3dHNwMGY3Mmtv&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.tiktok.com/@raicesUnidas" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                    <FontAwesomeIcon icon={faTiktok} />
                </a>
                <a href="https://www.threads.net/@raicesUnidas" target="_blank" rel="noopener noreferrer" aria-label="Threads">
                    <FontAwesomeIcon icon={faThreads} />
                </a>
            </div>
            <p>@raicesUnidas_</p>
        </div>
    )
}

export default Footer
