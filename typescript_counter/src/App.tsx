import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Count } from './components/Count'
import { Button } from './components/Button'

function App() {
  const [count, setCount] = useState<number>(0)
  const handleCount =(val:number)=>{
    if(count==0&&val==-1){

    }
    else{
      setCount(count+val);
    }
  }
  return (
    <div className="App">
    <Count count={count}/>
    <Button label='Add' setCount={()=>handleCount(1)}/>
    <Button label='Reduce' setCount={()=>handleCount(-1)}/>
    </div>
  )
}

export default App
