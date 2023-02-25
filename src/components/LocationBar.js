import React, { useContext, useEffect, useState } from 'react';
import { AiFillCloseSquare, AiOutlineClose, AiFillSave } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { CityContext } from '../Provider/CityProvider';
import '../css/LocationBar.css';

var secilensehirler=[];

function LocationBar() {
  const {setCity,categories,setCategories}=useContext(CityContext);
  const allCountries = GetCountry("https://countriesnow.space/api/v0.1/countries/iso");
  let countryData = allCountries.data;
  const [chosencountry, setChosencountry] = useState("Afghanistan");
  const allcities = GetCity("https://countriesnow.space/api/v0.1/countries/cities", chosencountry);
  let citydata = allcities.data;
  const [chosencity, setChosencity] = useState("Afghanistan");

  const HandleCountry = (e) => {
    let country1 = e.target.value;
    setChosencountry(country1);

};
  const HandleCity=(e)=>{
    const sehir=e.target.value; 
    setChosencity(sehir);
  };
  const SaveCity=()=>{
    setCity(chosencity);
    secilensehirler.push(chosencity);
    setCategories(secilensehirler);
    
  };
  const SelectClick=()=>{
    
  };
  return (
    <>
      <div className='loc-side-container'>
        <div className='loc-side-header'>
          <p>Şehir ekle</p>
          <Link to={'/'}><p><AiFillCloseSquare className='close-square' /></p></Link> 
        </div>
        <div className='loc-side-content'>
          <label>Ülke</label>
          <select  onChange={(e) => HandleCountry(e)}>
          {countryData != undefined ?
                    countryData.map(
                        (data) =>
                            (<option key={data.Iso2}>{data.name}</option>)
                    ) : console.log("data yok")
                }
          </select>
          <label>Şehir</label>
          <select onClick={SelectClick} onChange={(e)=>HandleCity(e)}>
          {citydata != undefined ?
                    citydata.map(
                        (data) =>
                            (<option>{data}</option>)
                    )
                    : console.log("şehir yok")
                }
          </select>
        </div>
        <div className='loc-side-footer'>
          <Link className='linkclass' to={'/'}><button className='cancel-button'><AiOutlineClose />Cancel</button></Link> 
          <button onClick={SaveCity} className='save-button'><AiFillSave />Save</button>
        </div>
      </div>
    </>
  );
}

const GetCountry = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
      fetch(url)
          .then((res) => res.json())
          .then((json) => setData(json))
  }, [url]);
  return data;
};
const GetCity = (url, cou) => {
  const [data, setData] = useState([]);
  useEffect(() => {
      fetch(url, {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
              "country": cou,
          }),
          redirect: 'follow'
      })
          .then(response => response.json())
          .then(result => setData(result))

  }, [cou]);



  return data;
}


export default LocationBar;