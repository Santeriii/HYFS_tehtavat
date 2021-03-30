import React, { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleAddGood = () => {
    setGood(good + 1)
  }

  const handleAddNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleAddBad = () => {
    setBad(bad + 1)
  }

  const Button = ({ handleClick, text }) => {
    return (
      <button onClick={handleClick}>
        {text}
      </button>
    )
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleAddGood} text={"good"} />
      <Button handleClick={handleAddNeutral} text={"neutral"} />
      <Button handleClick={handleAddBad} text={"bad"} />
      <h1>statistics</h1>
      good {good}<br/>
      neutral {neutral}<br/>
      bad {bad}
    </div>
  )
}

export default App