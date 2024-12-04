
import React from 'react';
import './navbar.css';
import logo from '../img/logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-links">

        <li><a href="#about">О нашей школе</a></li>
        <li><a href="#advantages">Преимущества</a></li>
        <li><a href="#classes">Классы</a></li>
        <li><a href="#contacts">Контакты</a></li>
      </ul>
      <button className="contact-button">Связаться с нами</button>
    </nav>
    
  );
}
export default Navbar;


