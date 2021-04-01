import React, { useState } from 'react'

const RandomAnecdote = ({ anecdotes, selected, setSelected, votes, setVotes }) => {
  const changeAnecdote = () => {
    setSelected(Math.floor(Math.random() * 6))
  }

  const vote = (event) => {
    event.preventDefault()
    const copy = {...votes}
    copy[selected] += 1

    setVotes(copy)
  }

  return (
    <div>
      {anecdotes[selected]}<br />
      has {votes[selected]} votes.<br/>
      <button onClick={vote}>vote</button>
      <button onClick={changeAnecdote}>next anecdote</button>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array.apply(null, new Array(10)).map(Number.prototype.valueOf,0))

  return (
    <RandomAnecdote anecdotes={anecdotes} selected={selected} setSelected={setSelected} votes={votes} setVotes={setVotes} />
  )
}

export default App
