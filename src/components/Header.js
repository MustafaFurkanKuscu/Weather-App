import React from 'react';
import '../css/Header.css';
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <div className='weather-header'>
                <div className='weather-header-content'>
                    <h1  className='weather-title'>Şehir seçerek hava durumunu öğrenebilirsiniz.</h1>
                    <p className='weather-subtitle'>Şehrini seç ve hava durumunu öğren</p>
                    <Link className='linkclass' to={'/LocationBar'}><button><AiOutlinePlus />Şehir Ekle</button></Link> 
                </div>

            </div>

        </>

    );
}

export default Header;