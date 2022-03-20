import React, { useEffect, useState } from 'react';
import './Counteris.css'
import Country from './Countrys/Country';

const Counteris = () => {
    const [countris,setcountris]
    =useState([]);
   useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setcountris(data))
   },[])
    return (
        <div className="counteris">
            {
                countris.map(country=>console.log(country))
            }
           {
               countris.map(country=><Country name={country.name.common} flag={country.flags.png}
                capital={country.capital}></Country>)
           }
        </div>
    );
};

export default Counteris;