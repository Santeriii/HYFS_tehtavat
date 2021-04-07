import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ names, setNames ] = useState([])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => {
          return (
            <li key={person.name}>{person.name}</li>
          )
        })}
      </ul>
    </div>
  )

}

export default App