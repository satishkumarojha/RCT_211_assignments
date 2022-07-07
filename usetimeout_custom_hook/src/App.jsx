import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useTimeout } from './hooks/useTimeout'

function App() {
  const ready = useTimeout(5000);

  return (
    <div className="App">
      <h1>Timeout</h1>
      {ready?"Ready":"Not ready"}
    </div>
  )
}

export default App
