import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Home } from './pages/Home'
import {Routes,Route} from 'react-router-dom';
import { Login } from './pages/Login';
import { Editpage } from './pages/Editpage';
import { Privateauth } from './hoc/Privateauth';
function App() {


  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element={<Privateauth> <Home/></Privateauth>}/>
        <Route path='/login' element={ <Login/>}/>
        <Route path='/todos/:id' element={ <Editpage/>}/>
      </Routes>
    </div>
  )
}

export default App
