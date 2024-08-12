import Cart from "../assets/Cart.svg";
import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const CartWidget = () => {

  const {cantidadCarrito} = useContext(CartContext);


  return (
    <div>
      
      <div className="Carrito"><img src={Cart} alt="Carrito"/> {cantidadCarrito()}</div>
     
    </div>
  )
}
export default CartWidget



