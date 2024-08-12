import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext';
import { useForm } from 'react-hook-form';
import {collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase"



const Checkout = () => {

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const { register, handleSubmit } = useForm();

  const [pedidoId, setPedidoId] = useState("");

  const comprar = (data) => {
    const pedido = {

      cliente: data,
      productos: carrito,
      total: precioTotal()

    }
    console.log(pedido);

    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido)
    .then((doc) => {
      setPedidoId(doc.id);
      vaciarCarrito();
    })

  }


  if (pedidoId) {
    return (
      <div className='Checkout'>
        <h1>¡Gracias por tu compra!</h1>
        <h2>Tu numero de pedido es: {pedidoId} </h2>
      </div>
    )
  }



  return (
   

    <div className='div-form'>
      <h1>Finalice su compra</h1>
      <form className='formulario' onSubmit={handleSubmit(comprar)}>
        <input type="text" placeholder='Nombre y apellido' {...register("nombre")} />
        <input type="text" placeholder='Ingrese su teléfono'{...register("telefono")} />
        <input type="email" placeholder='Ingrese su email'{...register("email")} />
        <button className='finalizar' type='submit'>Comprar</button>

      </form>
    </div>
  )
}

export default Checkout
