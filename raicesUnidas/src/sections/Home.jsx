import React from 'react'
import BannerImage from '../assets/RosanaLanding.png'
import '../styles/Home.css'

const Home = () => {
    return (
        <section
            id="inicio"
            className='home'
            style={{ backgroundImage: `url(${BannerImage})` }}
        >
            <div className='headerContainer'>
                <h1>Rosana Luque Menéndez</h1>
                <p>Encuentra tu poder personal y sana tu alma</p>

            </div>
        </section>
    )
}

export default Home
