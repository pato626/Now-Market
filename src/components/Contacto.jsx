import React, { useEffect } from 'react'
import aos from "aos";
import "aos/dist/aos.css";


const Contacto = () => {
  useEffect(() => {
    aos.init()
  }, [])
  return (
    <div>
      <h1 data-aos="fade-right">Para más información</h1>
      <br />
      <h2 data-aos="fade-right" className='finalizar'>Puedes visitar nuestro local en: Av. Duarte Quirós 1500</h2>
      <span className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.0350676103994!2d-64.20756918961196!3d-31.41315989598664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329883131977dd%3A0xd144c234cf20f657!2sAv.%20Duarte%20Quir%C3%B3s%201500%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1709945477706!5m2!1ses-419!2sar" width="300" height="300" allowfullscreen="" style={{ border: `solid 3px #7950f2` }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div>
        <h2 className='Centrar'>Nuestro horario de atención es:</h2>
        <h3 className='Centrar'>De lunes a viernes de 09:00 a 18:00</h3>
        <h3 className='Centrar'>Sábados de 09:00 a 15:00</h3>
        

      </div>
      </span>
  
      <h2 className='Centrar'>¡Lo esperamos!</h2>
    </div>
  )
}

export default Contacto