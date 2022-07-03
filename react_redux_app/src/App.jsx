import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import { Books } from './pages/Books'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Books/>}/>
     </Routes>
    </div>
  )
}

export default App
