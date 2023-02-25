import React, { useContext, useEffect, useState } from 'react';
import { AiFillCloseSquare, AiOutlineClose, AiFillSave } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { CityContext } from '../Provider/CityProvider';
import '../css/LocationBar.css';
import { CiLight } from "react-icons/ci";

function Sidebar() {
  
  return (
    <>
      <div className='loc-side-container'>
        <div className='loc-side-header'>
          <p>Şehir ekle</p>
          <Link to={'/'}><p><AiFillCloseSquare className='close-square' /></p></Link> 
        </div>
        <div className='loc-side-content-sidebar'>
          <label>Home</label>
          <button><CiLight/></button>
        </div>
        <div className='loc-side-footer'>
          <Link className='linkclass' to={'/'}><button className='cancel-button'><AiOutlineClose />Cancel</button></Link> 
          <button className='save-button'><AiFillSave />Save</button>
        </div>
      </div>
    </>
  );
}




export default Sidebar;