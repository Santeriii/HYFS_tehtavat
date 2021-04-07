import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [ countries, setCountries ] = useState([])
  const [ searchTerm, setSearchTerm ] = useState('')
  const foundCountries = countries.filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()))

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
      
  }, [])

  const handleSeacrhTermChange = (event) => {
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
            <li key={country.name}>{country.name}</li>
          )
      })}
      {foundCountries.length == 1 &&
        <>
          <h1>{foundCountries[0].name}</h1>
          <p>capital {foundCountries[0].capital}<br/>
          population {foundCountries[0].population}</p>
          <h2>languages</h2>
          <ul>
          {foundCountries[0].languages.map(language => {
            return (
              <li key={language.name}>{language.name}</li>
            )
          })}
          </ul>
          <img src={foundCountries[0].flag} alt={'flag'} />
        </>
      }
      </ul>
    </div>
  )
}

export default App;
