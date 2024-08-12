import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";


const ProductDetail = ({ product }) => {

  const { carrito, agregarAlCarrito } = useContext(CartContext);
  console.log(carrito);
  const [cantidad, setCantidad] = useState(1);


  const handleAddCount = () => {
    setCantidad(cantidad + 1);

  }

  const handleRemoveCount = () => {
    cantidad > 1 && setCantidad(cantidad - 1);

  }


  return (
    <div>
      <div className="producto-detalle">
        <img src={product.image} alt={product.title} />
        <div> <p className="orden-detalle">{product.title} </p> <p className="orden-detalle"> Categoría: {product.category} </p>  </div>
        <p className="orden-detalle">Precio: ${product.price}</p>
        <p className="orden-detalle">{product.description}</p>
        <div className="orden-detalle">

          <button className="boton-cantidad" onClick={handleAddCount}>+</button>

          <div className="boton-detalle">{cantidad} </div>

          <button className="boton-cantidad" onClick={handleRemoveCount}>-</button>

        </div>
        <div className="agregar-carrito"> <button onClick={() => { agregarAlCarrito(product, cantidad) }}>Agregar al carrito</button> </div>
      </div>



    </div>
  )
}

export default ProductDetail
