import React from 'react'
import { RitualesList } from '../helpers/RitualesList'
import RitualItem from '../Components/RitualItem'
import '../styles/Rituales.css'
const Menu = () => {
    return (
        <div className='menu'>
            <h1 className='menuTitle'>
                Menú
            </h1>
            <div className='menuList'>
                {
                    RitualesList.map((ritualItem, key) => {
                        return <RitualItem
                            key={key}
                            image={ritualItem.image}
                            name={ritualItem.name}
                            price={ritualItem.price}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default Menu