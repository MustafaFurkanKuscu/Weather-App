import './App.css';
import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Router/index';


function App() {
  //let city = "Adana";
  //let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=36e3a7f45406f528122dc08b31e1e0eb`;
  console.log("rendered");

  return (
    <RouterProvider router={router}/>
      
      
    
  );
}

const GetWeatherInfos = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setData(json))

  }, [url])

  return data;
};

export default App;
