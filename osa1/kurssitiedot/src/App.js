import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = (props) => {
    return (
      <h1>{props.header}</h1>
    )
  }

  const Part = (props) => {
    return (
      <p>
        {props.part} {props.exercises}
      </p>
    )
  }

  const Content = parts => {
    return (
      <>
        <Part part={parts.parts[0].name} exercises={parts.parts[0].exercises1} />
        <Part part={parts.parts[1].name} exercises={parts.parts[1].exercises2} />
        <Part part={parts.parts[2].name} exercises={parts.parts[2].exercises3} />
      </>
    )
  }
  const Total = parts => {
    return (
      <p>Number of exercises {parts.parts[0].exercises + parts.parts[1].exercises + parts.parts[2].exercises}</p>
    )
  }

  return (
    <div>
      <Header header={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App