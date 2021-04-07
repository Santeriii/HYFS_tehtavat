import React, { useState } from 'react'
import Numbers from './components/Numbers'
import Filter from './components/Filter'
import AddPersonForm from './components/AddPersonForm'

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

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchTerm={searchTerm} handleSearchTermChange={handleSearchTermChange} />
      <AddPersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <Numbers persons={persons} searchTerm={searchTerm} />
    </div>
  )

}

export default App