import React, { useState, useEffect } from 'react'
import './Nav.css'


function Nav() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY <= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  




  return (

  <nav className={colorChange ? "navbar colorChange" : "nav"}>
         <img className='nav__logo' src='/Images/Flix.png' alt='Flix logo' />

         <img
           className='nav__avatar'
           src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
           alt='Netflix login avatar'
         />
       </nav>
  
 );
}

export default Nav