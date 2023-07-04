import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.png';
import '../pages/StylePage'
function Navbar() {
  return (
    
    <header>
       <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
      
      <Link to="/" className="logo">
      <img className="logo-image" src={Logo} alt=""/> <i className="fas fa-utensils"></i> 
      </Link>
      <div id="menu-bar" className="fas fa-bars"></div>

      <nav className="navbar">
        <Link to="/">home</Link>
        <Link to="#speciality">speciality</Link>
        <Link to="#popular">popular</Link>
        <Link to="/gallery">gallery</Link>
        <Link to="#review">review</Link>
        <Link to="/order">order</Link>
      </nav>
    </header>
  );
}

export default Navbar;
