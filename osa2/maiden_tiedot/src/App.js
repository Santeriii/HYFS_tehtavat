import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [ countries, setCountries ] = useState([])
  const [ searchTerm, setSearchTerm ] = useState('')
  const foundCountries = countries.filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()))
  const [ weatherData, setWeatherData ] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  useEffect(() => {
    if (foundCountries.length === 1) {
      axios
        .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${foundCountries[0].capital}`)
        .then(response => {
          setWeatherData(response.data)
        })
    }
  }, [searchTerm])

  const handleSeacrhTermChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const showFullCountryData = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div>
      find countries <input
        onChange={handleSeacrhTermChange}
      />
      <ul>
      {foundCountries.length > 10 &&
        <div>too many matches, specify another filter</div>
      }
      {(foundCountries.length < 10 && foundCountries.length > 1) &&
        foundCountries.map(country => {
          return (
            <>
              <li key={country.name}>{country.name}</li>
              <button key={country.capital} onClick={showFullCountryData} value={country.name}>show</button>
            </>
          )
      })}
      {foundCountries.length == 1 &&
        <>
          <h1>{foundCountries[0].name}</h1>
          <p>capital {foundCountries[0].capital}<br/>
          population {foundCountries[0].population}</p>
          <h2>Spoken languages</h2>
          <ul>
          {foundCountries[0].languages.map(language => {
            return (
              <li key={language.name}>{language.name}</li>
            )
          })}
          </ul>
          <img src={foundCountries[0].flag} alt={'flag'} />
          <h2>Weather in {foundCountries[0].capital}</h2>
          {weatherData.current &&
            <>
              <p>temperature: {weatherData.current.temperature} Celsius</p>
              <img src={weatherData.current.weather_icons[0]} alt={'current weather icon'} />
              <p>wind: {weatherData.current.wind_speed} mph direction {weatherData.current.wind_dir}</p>
            </>
          }
        </>
      }
      </ul>
    </div>
  )
}

export default App;
