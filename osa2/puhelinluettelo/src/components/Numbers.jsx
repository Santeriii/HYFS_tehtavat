import React from 'react'

const Numbers = ({ persons, searchTerm, deletePerson }) => {
    return (
        <>
        <h2>Numbers</h2>
        <ul>
            {persons.map(person => {
            if ((person.name.toLowerCase()).includes(searchTerm.toLowerCase())) {
                return (
                <li key={person.name}>{person.name} {person.number} <button onClick={() => deletePerson(person.id)}>delete</button></li>
                )
            }
            })}
        </ul>
      </>
    )
}

export default Numbers