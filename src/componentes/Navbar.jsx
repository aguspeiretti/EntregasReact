import React from "react";
import '../estilos/Navbar.css' // Importando el estilo de la navbar
import logo from '../imagenes/logo.png'

function Navbar() {
  return (
    <div className="contenedor-navbar">
      <div className="separador">
      <div className="contenedor imagen">
          <img className="logo-navbar" src={logo} alt="logo" />
      </div>  
      <div className="contenedor-menu">
      <ul className="">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Nosotros</a>
        </li>
        <li>
          <a href="#">Servicios</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>
      </div>
      </div>
      <div className="usuario">
          <a className="link-usuario" href="#"><i class="fa-solid fa-user icono-usuarios "></i> sing up</a>
      </div>
    </div>
  );
}

export default Navbar;
