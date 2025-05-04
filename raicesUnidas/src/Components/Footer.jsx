import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faThreads } from '@fortawesome/free-brands-svg-icons'
import '../styles/Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTiktok} />
                <FontAwesomeIcon icon={faThreads} />
            </div>
        </div>
    )
}

export default Footer