import React, { useState } from 'react'

const StatisticsLine = ({ text, value}) => {
  return (
    <>{text} {value}</>
  )
}

const Statistics = (props) => {
  if ((props.good + props.neutral + props.bad) > 0) {
    return (
      <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{props.good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{props.neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{props.bad}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{props.average}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{props.positive} %</td>
          </tr>
        </tbody>
      </table>
      </>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      No feedback given
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

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

  const average = (good, neutral, bad) => {
    return ((good * 1) + (neutral * 0) + (bad * -1)) / (good + neutral + bad)
  }

  const positive = (good, neutral, bad) => {
    return (good / (good + neutral + bad)) * 100
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleAddGood} text={"good"} />
      <Button handleClick={handleAddNeutral} text={"neutral"} />
      <Button handleClick={handleAddBad} text={"bad"} />
      <Statistics good={good} neutral={neutral} bad={bad} positive={positive(good, neutral, bad)} average={average(good, neutral, bad)} />
    </div>
  )
}

export default App