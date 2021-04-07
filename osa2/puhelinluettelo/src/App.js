import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '045-666'
    }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ names, setNames ] = useState([])
  const [ searchTerm, setSearchTerm ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    persons.map(person => {
      setNames(names.concat(person.name))
    })

    if (!names.includes(newName)) {
      setPersons(persons.concat(personObject))
    }
    
    if (names.includes(newName)) {
      alert(`${newName} is already added to phonebook`)
    }

    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const clearPersonsToShow = () => {
    setPersonsToShow([{}])
  }

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with<input
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      <form onSubmit={addPerson}>
        <h2>add a new</h2>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange}
          /><br/>
          number: <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => {
          if ((person.name.toLowerCase()).includes(searchTerm.toLowerCase())) {
            return (
              <li key={person.name}>{person.name} {person.number}</li>
            )
          }
        })}
      </ul>
    </div>
  )

}

export default App