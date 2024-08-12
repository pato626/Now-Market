import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }


    return (
        <div>
            <h1>Tu pedido</h1>
            {
                carrito.map((prod) => (
                    <div key={prod.id}>
                        <img src={prod.image} alt={prod.title} />
                        <div> <p>{prod.title} </p> <p> Categoría: {prod.category} </p>  </div>
                        <p>Precio: ${prod.price}</p>
                        <p>Cantidad {prod.cantidad}</p>
                        <p>{prod.description}</p>
                    </div>
                ))
            }

            <div>
                <button className="vaciar" onClick={handleVaciar}>Vaciar carrito</button>
            </div>

            <div> <h2>Precio Total: $ {precioTotal()} </h2>
                
                <Link to="/Checkout"> <button className="finalizar">Finalizar compra</button> </Link>
                
            </div>


        </div>


    )
}

export default Carrito