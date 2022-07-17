import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { InputTodo } from './components/InputTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Todo App</h1>
     <InputTodo/>
    </div>
  )
}

export default App
