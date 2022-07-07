import { useState } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch'

function App() {
const{ data,loading,error} = useFetch("https://fakestoreapi.com/users");
  return (
    <div className="App">
      <h1>Users</h1>
      {loading && <h1>Loading...</h1>}
     {!loading && !error && data?.map((e)=>{
      return <div key={e.id}>
        <h3>{e.email}</h3>
      </div>
     })}
    </div>
  )
}

export default App
