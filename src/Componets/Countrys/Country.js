import React from 'react';
import './Country.css'

const Country = (props) => {

    return (
        <div className="country">
           <h2>Name:{props.name}</h2> 
           <img src={props.flag}/>
           <p>Capital:{props.capital}</p>
        </div>
    );
};

export default Country;