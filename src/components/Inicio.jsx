import React, { useState, useEffect } from 'react';
import Hogar from "../assets/Hogar.png";
import Ofertas from "../assets/Ofertas.png";
import ClipLoader from "react-spinners/ClipLoader";
import aos from "aos";
import "aos/dist/aos.css";

const Inicio = () => {
  
  const [loading, setLoading] = useState(false);
  useEffect(()=> {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)

    },1000)
  },[])

  useEffect(()=>{
    aos.init()
  },[])

  return (
    <div className='Spinner'>
      {
        loading ?
        <ClipLoader
        color={`#7950f2`}
        loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      :
      <div>
      <h1 className='Title animate__animated animate__backInDown'>Now Market !</h1>
        <div className='Inicio'>
        <h2 className='animate__animated animate__backInUp'>Bienvenido al sitio web número 1 en ventas de productos para el hogar .</h2>
        <div className='animate__animated animate__backInRight'><img className='Img-res' src= {Hogar} alt="" /></div>
        </div>
        <div className='Centrar'>
          <p>¡ Tenemos las mejores ofertas para usted !</p>
          <img className='Imagen' src= {Ofertas} alt="" />
        </div>
        <div><h3 data-aos="fade-up" className='finalizar'>Explora nuestra amplia gama de electrodomésticos y productos de cocina diseñados para hacer tu vida más cómoda y tu cocina más eficiente. Descubre soluciones innovadoras que transformarán tu hogar, desde estufas de última generación hasta electrodomésticos inteligentes que se adaptan a tu estilo de vida.</h3></div>
        <div><h3 data-aos="fade-up" className='finalizar'>Encuentra la fusión perfecta entre funcionalidad y estilo con nuestras cocinas y estufas de vanguardia. Descubre la magia de la cocina con nuestros microondas de tecnología avanzada y disfruta de la frescura con nuestra selección de refrigeradores y congeladores diseñados para satisfacer tus necesidades.</h3></div>
        <div><h3 data-aos="fade-up" className='finalizar'>Mantén tu ropa impecable con nuestras lavadoras y secadoras de última generación, y experimenta la comodidad en el cuidado personal con nuestros productos para el cabello y la piel. Simplifica la limpieza con nuestras aspiradoras y descubre la potencia del vapor con nuestros limpiadores especializados.</h3></div>
        <div><h3 data-aos="fade-up" className='finalizar'>Desde cafeteras hasta procesadores de alimentos, ofrecemos una amplia variedad de electrodomésticos de cocina que harán que tus momentos culinarios sean más placenteros. Mejora tu bienestar con nuestros productos de climatización y disfruta de una experiencia de entretenimiento en el hogar incomparable con nuestras opciones de electrónica de alta calidad.</h3></div>
        </div>
      }
   
    </div>
  )
}

export default Inicio