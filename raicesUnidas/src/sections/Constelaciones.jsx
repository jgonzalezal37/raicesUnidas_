import React from 'react';
import '../styles/Constelaciones.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import constelacion1 from "../assets/constelacion1.jpg";
// import constelacion2 from "../assets/constelacion2.jpg";
// import constelacion3 from "../assets/constelacion3.jpg";

const Constelaciones = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: true,
    };

    return (
        <section id="constelaciones" className="constelaciones-container">
            <h1>Constelaciones Familiares</h1>
            <p>
                Las <strong>Constelaciones Familiares</strong> son una poderosa herramienta terapéutica que permite revelar
                dinámicas ocultas dentro del sistema familiar. A través de esta metodología, podemos observar patrones
                que se repiten, lealtades invisibles o vínculos no resueltos que afectan nuestra vida actual.
            </p>

            <h2>¿Cómo funcionan?</h2>
            <p>
                Mediante representaciones simbólicas (presenciales o online), se visualizan las relaciones entre los miembros
                del sistema familiar. Esto permite tomar conciencia, liberar cargas emocionales y devolver a cada persona su
                lugar dentro del sistema.
            </p>

            <h2>Beneficios</h2>
            <ul>
                <li>Sanación de vínculos familiares.</li>
                <li>Mayor claridad emocional.</li>
                <li>Mejora en relaciones personales y laborales.</li>
                <li>Conexión profunda con tu linaje y origen.</li>
            </ul>

            <h2>¿Cuándo hacer una constelación?</h2>
            <p>
                Si sientes que hay bloqueos en tu vida, patrones que se repiten, dificultades familiares o conflictos internos
                sin explicación, este puede ser el camino hacia una comprensión más profunda.
            </p>

            {/* <Slider {...sliderSettings} className="constelaciones-slider">
                <div>
                    <img src={constelacion1} alt="Constelación 1" />
                </div>
                <div>
                    <img src={constelacion2} alt="Constelación 2" />
                </div>
                <div>
                    <img src={constelacion3} alt="Constelación 3" />
                </div>
            </Slider> */}

            <p className="firma">🌿 Un viaje hacia el alma de tu familia, <strong>Raíces Unidas</strong></p>
        </section>
    );
};

export default Constelaciones;
