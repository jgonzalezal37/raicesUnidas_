import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div className='home'>
            <div className='headerContainer'>
                <h1> RaicesUnidas </h1>
                <Link to="/inicio">
                    <button>
                        Servicios
                    </button>
                </Link>


            </div>
        </div>
    )
}

export default Home