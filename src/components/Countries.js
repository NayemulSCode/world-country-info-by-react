
import React, { useEffect, useState } from 'react'
import './Countries.css'
// import Button from '@material-ui/core/Button'
// import { IconButton } from '@material-ui/core'

function Countries() {
    const [countries, setCountries] = useState([]);
    useEffect(() =>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            {
                countries.map(country => <div className="country">
                    
                    <div>
                        <h4>Name: {country.name}</h4>
                        <h5>Capital: {country.capital}</h5>
                        <p><span className="propertyName">Region: </span>{country.region}</p>
                        <p><span className="propertyName">Area: </span>{country.area} s.km</p>
                        <p><span className="propertyName">Population: </span>{country.population}</p>
                        <p><span className="propertyName">Border: </span>{country.borders[0]}</p>
                        <p><span className="propertyName">Currency: </span>{country.currencies[0].name}</p>
                        <p><span className="propertyName">Calling Code: </span>{country.callingCodes}</p>
                        <p><span className="propertyName">Language: </span>{country.languages[0].name}</p>
                        <p className="flag">Flag: <img src={country.flag} /></p>
                    </div>
                </div>)
            }
        </div>
    )
}


export default Countries
