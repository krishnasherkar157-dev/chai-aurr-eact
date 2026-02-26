import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(16)
  //let counter = 15
  const addValue = () => {
    console.log("clicked", counter);
    setCounter(counter + 1)
  }

  const removeValue = () => {
    console.log("clicked", counter);
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
