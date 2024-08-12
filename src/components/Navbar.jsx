import React from 'react'
import Search from "../assets/Search.png"
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';


const Navbar = () => {
    return (
        <div>
            <header className='navbar'>
                <nav>
                    <ul>

                    <Link to="/">  <li>Inicio</li> </Link>
                        <div className='search-box'>
                            <input type="search" placeholder='search' />
                            <img src={Search} alt="" className='logo2' />
                        </div>
                         <Link to="/Productos"> <li>Productos</li> </Link>
                         <Link to="/Contacto"> <li>Contacto</li> </Link>
                         <Link to="/Carrito"> <li> <CartWidget/> </li> </Link>

                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar