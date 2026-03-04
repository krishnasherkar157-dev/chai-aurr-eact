import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider, store } from './app/store'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
    
    <AddTodo/>
    <Todos/>
    </Provider>
  )
}

export default App
