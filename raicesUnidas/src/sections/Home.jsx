import React from 'react'
import BannerImage from '../assets/imagenHome.jpg'
import '../styles/Home.css'

const Home = () => {
    return (
        <section
            id="inicio"
            className='home'
            style={{ backgroundImage: `url(${BannerImage})` }}
        >
            <div className='headerContainer'>
                <h1>RaicesUnidas</h1>
                <p>Encuentra tu poder personal y sana tu alma</p>

            </div>
        </section>
    )
}

export default Home
