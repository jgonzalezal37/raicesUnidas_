import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/imagenHome.jpg'
import '../styles/Home.css'
const Home = () => {
    return (
        <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className='headerContainer'>
                <h1> RaicesUnidas </h1>
                <p>Pagina web de Raices Unidas</p>
                <Link to="/menu">
                    <button>
                        Servicios
                    </button>
                </Link>


            </div>
        </div>
    )
}

export default Home