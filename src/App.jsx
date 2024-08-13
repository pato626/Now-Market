import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import Navbar from './components/Navbar';
import Contacto from './components/Contacto';
import ItemListContainer from './components/ItemListContainer';
import Carrito from './components/Carrito';
import Checkout from './components/Checkout';
import { CartProvider } from './Context/CartContext';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {


  return (

    <CartProvider>

    <BrowserRouter>
      <Navbar />
      
      <Routes>
           
      <Route path="" element={<Inicio />} />
          <Route path="/Productos" element={<ItemListContainer />} />
          <Route path="/Detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/Checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
 </CartProvider>
  )
}

export default App
