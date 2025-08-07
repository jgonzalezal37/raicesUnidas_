import React from 'react'

const RitualItem = ({ image, name, price, onAddToCart }) => {
    return (
        <div className='ritualItem'>
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1>{name}</h1>
            <p>{price}</p>
            <button onClick={onAddToCart}>Añadir al carrito</button>
        </div>
    )
}

export default RitualItem
