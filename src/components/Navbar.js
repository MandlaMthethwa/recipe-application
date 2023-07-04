import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.png';
import '../pages/StylePage'
function Navbar() {

  const handleMenuClick = () => {
    const menu = document.querySelector('#menu-bar');
    const navbar = document.querySelector('.navbar');

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  };

  return (
    
    <header>
       <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
      
      <Link to="/" className="logo">
      <img className="logo-image" src={Logo} alt=""/> <i className="fas fa-utensils"></i> 
      </Link>
      <div id="menu-bar" className="fas fa-bars" onClick={handleMenuClick}></div>

      <nav className="navbar">
        <Link to="/">home</Link>
        <Link to="#review" >Reviews</Link>
        <Link to="#order" > Request recipe</Link>
      </nav>
    </header>
  );
}

export default Navbar;
