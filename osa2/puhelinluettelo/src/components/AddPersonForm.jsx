import React from 'react'

const AddPersonForm = ({ addPerson, newName, handleNameChange, newNumber, handleNumberChange }) => {
    return (
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
    )
}

export default AddPersonForm