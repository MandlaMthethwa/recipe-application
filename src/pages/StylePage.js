import React, { useEffect } from 'react';

const StylePage = () => {
    useEffect(() => {
      function loader() {
        document.querySelector('.loader-container').classList.add('fade-out');
      }
  
      function fadeOut() {
        setInterval(loader, 3000);
      }
  
      fadeOut();
    }, []);
  
   
    const handleScroll = () => {
      const menu = document.querySelector('#menu-bar');
      const navbar = document.querySelector('.navbar');
      const scrollTop = document.querySelector('#scroll-top');
  
      menu.classList.remove('fa-times');
      navbar.classList.remove('active');
  
      if (window.scrollY > 60) {
        scrollTop.classList.add('active');
      } else {
        scrollTop.classList.remove('active');
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
      <div>

      </div>
    );
  };
  
  export default StylePage;
  