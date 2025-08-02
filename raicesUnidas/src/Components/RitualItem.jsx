import React from 'react'

const RitualItem = ({ image, name, price }) => {
    return (
        <div className='ritualItem'>
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1>{name}</h1>
            <p>{price}</p>
        </div>
    )
}

export default RitualItem
