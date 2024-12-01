import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";

const ProductDetail = ({ product }) => {
  const { carrito, agregarAlCarrito } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);

  const handleAddCount = () => {
    setCantidad((prevCantidad) => prevCantidad + 1);
  };

  const handleRemoveCount = () => {
    setCantidad((prevCantidad) => Math.max(prevCantidad - 1, 1));
  };

  const handleAddToCart = () => {
    agregarAlCarrito(product, cantidad);
  };

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h1 className="product-title">{product.title}</h1>
        <p className="product-category">Categoría: {product.category}</p>
        <p className="product-price">Precio: ${product.price}</p>
        <p className="product-description">{product.description}</p>
        <div className="quantity-control">
          <button className="quantity-button" onClick={handleRemoveCount}>
            -
          </button>
          <span className="quantity-display">{cantidad}</span>
          <button className="quantity-button" onClick={handleAddCount}>
            +
          </button>
        </div>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;

