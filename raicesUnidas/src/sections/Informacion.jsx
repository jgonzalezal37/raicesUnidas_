import React from 'react';
import '../styles/Informacion.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderImg1 from "../assets/slider1.jpg"
import sliderImg2 from "../assets/slider2.jpg"
import sliderImg3 from "../assets/slider3.jpg"


const Informacion = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
    };

    return (
        <section id="informacion" className="informacion-container">
            <h1>Sobre Raíces Unidas</h1>
            <p>
                En <strong>Raíces Unidas</strong>, creemos en el poder de la sanación espiritual y en el regreso a nuestras raíces
                personales y familiares. Ofrecemos espacios de transformación para personas que buscan reconectar con su
                historia, su energía y su propósito de vida.
            </p>

            <h2>¿Qué hacemos?</h2>
            <ul>
                <li><strong>Constelaciones Familiares:</strong> Un método terapéutico para liberar bloqueos familiares y sanar vínculos.</li>
                <li><strong>Lecturas de Tarot:</strong> Guía y reflexión a través de los arquetipos del tarot tradicional y evolutivo.</li>
                <li><strong>Rituales Energéticos:</strong> Ceremonias personalizadas para cerrar ciclos, abrir caminos y limpiar energías.</li>
            </ul>

            <h2>Nuestra Visión</h2>
            <p>
                Queremos acompañarte en tu camino de autoconocimiento y empoderamiento espiritual, honrando tu linaje,
                tus emociones y tus decisiones. Creemos que cada persona tiene la capacidad de sanar y crear una vida más consciente.
            </p>

            <h2>¿Para quién es?</h2>
            <p>
                Nuestros servicios están dirigidos a cualquier persona que sienta el llamado de sanar, reconectar y evolucionar:
                mujeres, hombres, adolescentes, familias o terapeutas que buscan una nueva mirada interior.
            </p>

            <h2>Ubicación y formato</h2>
            <p>
                Realizamos sesiones presenciales en espacios naturales, y también ofrecemos servicios online para que puedas
                conectar desde cualquier lugar del mundo.
            </p>
            <Slider {...sliderSettings} className="informacion-slider">
                <div>
                    <img src={sliderImg1} alt="Momento 1" />
                </div>
                <div>
                    <img src={sliderImg2} alt="Momento 2" />
                </div>
                <div>
                    <img src={sliderImg3} alt="Momento 3" />
                </div>
            </Slider>
            <p className="firma">✨ Con amor, <strong>Raíces Unidas</strong></p>
        </section>
    );
};

export default Informacion;
