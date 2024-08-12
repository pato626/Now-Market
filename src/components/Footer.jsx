import React from 'react';
import Github from "../assets/Github.svg";
import Linkedin from "../assets/Linkedin.svg";
import Telephone from "../assets/Telephone.svg";
import Gmail from "../assets/Gmail.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='Footer'>

      <footer className='Footer-Content'>
        <section>

          <h3>Información de contacto</h3>
          
          

          <span>

            <p>Teléfono movil: +5 4 3 5 1 2 1 9 3 2 0 0</p> <img src={Telephone} alt="" />
            <p>Email: ruromar666@gmail.com</p> <img src={Gmail} alt="" />

          </span>

        </section>

        <span className='De-Lado'>
          <Link to="https://github.com/pato626" target='_blank'> <img className='Social-Media' src={Github} alt="Ícono de github" /> </Link>
          <Link to="https://www.linkedin.com/in/patricio-martinez-7b0384107/" target='_blank'> <img className='Social-Media' src={Linkedin} alt="Linkedin" /> </Link>
        </span>

        <hr />
        <p>&copy; Patricio Martínez 2024. Todos los derechos reservados.</p>
  

      </footer>

    </div>
  )
}

export default Footer