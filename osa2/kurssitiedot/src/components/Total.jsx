import React, { useEffect, useState } from 'react'

const Total = parts => {
    const [total, setTotal] = useState(0)
    const partArray = parts.parts

    useEffect(() => {
        partArray.map(part => {
            setTotal(prevState => prevState + part.exercises)
        })
    }, [])

    return (
        <p>total of {total} exercises</p>
    )
}

export default Total