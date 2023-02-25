import React from 'react';
import '../css/Navbar.css';
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
    <div className='navbar'>
        <p>Hava Durumu Sorgulama</p>
        <p><BiMenuAltRight className='navbar-menu-icon'/></p>
    </div>
    </>
  );
}

export default Navbar;