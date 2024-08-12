import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ( {children} ) => {

    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (product, cantidad) => {
        console.log(agregarAlCarrito);
        const itemAgregado = { ...product, cantidad };
        setCarrito([...carrito, itemAgregado]);

        const nuevoCarrito = [...carrito]

        const estaEnElCarrito = nuevoCarrito.find((prod) => prod.id === itemAgregado.id)

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;

        } else { nuevoCarrito.push(itemAgregado) }

        setCarrito(nuevoCarrito)


    }

    const cantidadCarrito = () => {

        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);

    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    return (
         <CartContext.Provider value={{ carrito, agregarAlCarrito, cantidadCarrito, precioTotal, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    )
}