import React from 'react'
import Course from './components/Course'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: "äksdeekurssi",
        exercises: 13,
        id: 4
      }
    ]
  }

  const Total = parts => {
    return (
      <p>Number of exercises {parts.parts[0].exercises + parts.parts[1].exercises + parts.parts[2].exercises}</p>
    )
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App;
