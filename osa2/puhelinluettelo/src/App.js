import React, { useState, useEffect } from 'react'
import Numbers from './components/Numbers'
import Filter from './components/Filter'
import AddPersonForm from './components/AddPersonForm'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchTerm, setSearchTerm ] = useState('')
  const [ isOnList, setIsOnList ] = useState(false)

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
      if (person.name === newName) {
        setIsOnList(true)
      }
    })

    if (!isOnList) {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
    }
    
    if (isOnList) {
      console.log("includes")
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const toBeUpdated = persons.find(person => person.name === personObject.name)
        const id = toBeUpdated.id

        personService
          .update(id, personObject)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
          })
      }

      
    }

    setNewName('')
    setNewNumber('')
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