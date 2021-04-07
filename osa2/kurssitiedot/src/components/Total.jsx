import React, { useEffect, useState } from 'react'

const Total = parts => {
    const [total, setTotal] = useState(0)
    let exercises = []
    const partArray = parts.parts

    useEffect(() => {
        partArray.map(part => {
            const copy = exercises.concat(part.exercises)
            exercises = copy
        })
        
        setTotal(exercises.reduce( (s, p) => s + p))
    }, [])

    return (
        <p>total of {total} exercises</p>
    )
}

export default Total