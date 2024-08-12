import React from 'react'
import { Link } from 'react-router-dom';


const Item = ({ producto }) => {
    return (
        <div className='productos'>

            <div className='productos-flex'>
                <img src={producto.image} alt={producto.title} className='tamaño-imagen' />
                <p>{producto.title}</p>
                <p>Precio: ${producto.price}</p>
                <div> <p>categoría: {producto.category}</p> </div>
                
                <Link to={`/Detalle/${producto.id}`}>  <button>Ver más</button> </Link>
            </div>

        </div>
    )
}

export default Item;
