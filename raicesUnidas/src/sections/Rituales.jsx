import React from 'react';
import { RitualesList } from '../helpers/RitualesList';
import RitualItem from '../components/RitualItem';
import '../styles/Rituales.css';

const Rituales = () => {
    return (
        <section id="rituales" className="rituales">
            <h1 className="ritualesTitle">Rituales y servicios</h1>
            <div className="ritualesList">
                {RitualesList.map((ritualItem, key) => (
                    <RitualItem
                        key={key}
                        image={ritualItem.image}
                        name={ritualItem.name}
                        price={ritualItem.price}
                    />
                ))}
            </div>
        </section>
    );
};

export default Rituales;
