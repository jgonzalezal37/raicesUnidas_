import { React, useEffect } from 'react'
import BannerImage from '../assets/RosanaLanding.png'
import '../styles/Home.css'
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                // Le damos un pequeño delay para asegurar que el DOM esté listo
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location.state]);
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
