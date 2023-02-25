import React from 'react';
import LocationBar from './components/LocationBar';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Weather from './components/Weather';
import { Outlet } from 'react-router-dom';
import CityProvider from './Provider/CityProvider';

function Root() {
  return (
    <>
      <CityProvider>
        <Navbar />
        <Header />
        <Weather />
        <Outlet />
      </CityProvider>

    </>
  );
}

export default Root;