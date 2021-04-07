import React, { useState, useEffect } from 'react'
import Numbers from './components/Numbers'
import Filter from './components/Filter'
import AddPersonForm from './components/AddPersonForm'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ names, setNames ] = useState([])
  const [ searchTerm, setSearchTerm ] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

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
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
    }
    
    if (names.includes(newName)) {
      alert(`${newName} is already added to phonebook`)
    }

    setNewName('')
  }

  const deletePerson = (id) => {
    personService
      .remove(id)
      .then(
        setPersons(persons.filter(person => person.id !== id))
      )
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
      <Numbers persons={persons} searchTerm={searchTerm} deletePerson={deletePerson} />
    </div>
  )

}

export default App