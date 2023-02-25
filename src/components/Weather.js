import React, { useContext, useEffect, useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import '../css/Weather.css';
import { CityContext } from '../Provider/CityProvider';

var cityList = [];
var days=['','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
function Weather() {
    const { city ,categories,setCategories} = useContext(CityContext);

    const DeleteCity = (city) => {
        const data=categories.filter(sehir=>sehir!=city);
        setCategories(data);
        
    };
    function ClickMenuBar(id){
        document.getElementById(id).hidden=!(document.getElementById(id).hidden);
    }


    const ListeGetir = (props) => {
        const data = GetWeatherInfo(props.city);
        
        return (

            data.length != 0 ?
                <div className='card'>
                    <div className='card-header'>
                        <p className='card-header-date'>{days[new Date().getDay()]}<span>{new Date().getDate()}</span></p>
                        <p><BsThreeDotsVertical onClick={(e) =>ClickMenuBar(`${data.name}`)} />
                            {<div className='card-header-menu'>
                                <button id={data.name} onClick={() => DeleteCity(props.city)} hidden={true}>Delete</button>
                            </div>}
                        </p>
                    </div>
                    <div className='card-content'>
                        <img alt='resim yok' src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}></img>
                        <p className='larger-font'>{data.name} <span className='countrycode'>{data.sys.country}</span></p>
                        <span>{data.weather[0].description}</span>
                    </div>
                    <div className='card-footer'>
                        <div className='card-footer-content'>
                            <p>Current Temp.</p>
                            <p className='larger-font'>{(data.main.temp - 273).toFixed(2)}°C</p>
                        </div>
                        <div className='card-footer-content'>
                            <p>Feels Like</p>
                            <p className='larger-font'>{(data.main.feels_like - 273).toFixed(2)}°C</p>
                        </div>
                        <div className='card-footer-content'>
                            <p>Humidity</p>
                            <p className='larger-font'>% {data.main.humidity}</p>
                        </div>
                    </div>
                </div>
                : console.log("data yok")
        );
    }

    setTimeout(() => this.setState({}), 3000);

    return (
        <>
            <div id='city-list-deneme' className='city-weather'>
               {categories.map(city=><ListeGetir city={city}/>)}
            </div>
            {city!=0 &&
            setTimeout(() =><div id='addedinfo' className='addedinfo'><p>City {city} is added succesfully</p></div> , 3000)
            }
            
            


        </>
    );
}

const GetWeatherInfo = (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=36e3a7f45406f528122dc08b31e1e0eb`;
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => setData(json))

    }, [url])
    return data;

}

export default Weather;


