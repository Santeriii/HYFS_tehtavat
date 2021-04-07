import React from 'react'

const Numbers = ({ persons, searchTerm}) => {
    return (
        <>
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
      </>
    )
}

export default Numbers