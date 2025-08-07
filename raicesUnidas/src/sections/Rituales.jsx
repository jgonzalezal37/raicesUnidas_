import React from 'react';
import Slider from "react-slick";
import "../styles/Rituales.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import RitualItem from "../components/RitualItem";
import { RitualesList } from "../helpers/RitualesList";
import { useCart } from '../context/cartContext';

// Flechas personalizadas
const PrevArrow = (props) => (
    <div {...props} className="custom-arrow prev">
        <FaArrowLeft />
    </div>
);

const NextArrow = (props) => (
    <div {...props} className="custom-arrow next">
        <FaArrowRight />
    </div>
);

const Rituales = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: "0px",
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };
    const { addToCart } = useCart();
    const handleAddToCart = (ritualItem) => {
        const itemToAdd = {
            id: ritualItem.id || crypto.randomUUID(), // aseguramos un id único
            name: ritualItem.name,
            price: ritualItem.price,
            quantity: 1
        };
        addToCart(itemToAdd);
        alert(`${ritualItem.name} añadido al carrito`);
    };
    return (
        <section id="rituales" className="rituales">
            <h1 className="ritualesTitle">Tarot y Rituales</h1>
            <Slider {...sliderSettings} className="ritualesSlider">
                {RitualesList.map((ritualItem, key) => (
                    <div key={key} className="ritualSlide">
                        <RitualItem
                            image={ritualItem.image}
                            name={ritualItem.name}
                            price={ritualItem.price}
                            onAddToCart={() => handleAddToCart(ritualItem)}
                        />
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Rituales;
