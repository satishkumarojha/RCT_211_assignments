import React, { useState } from 'react';
import { SingleTodo } from './SingleTodo';
interface todoObj{
  tasks:string;
  tstatus:boolean;
}

export const InputTodo = () => {
  const[info,setInfo] = useState("");
  const[todo,setTodo] = useState<todoObj[]>([]);
  const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e)=>{
    setInfo(e.target.value);
  }
  const handleAdd = ()=>{
    const payload ={
      tasks:info,
      tstatus:false,
    }
    setInfo("");
    setTodo([...todo,payload]);
   
}
const toggleTodo = (val:string)=>{
  setTodo([...todo.map((e)=>{
    return (e.tasks==val?{...e,tstatus:!e.tstatus}:e)
  })]);
}
const deleteTodo = (val:string)=>{
setTodo(todo.filter((e)=>e.tasks!=val));
}
  return (
    <div>
      <input type="text" value={info} placeholder='Enter Input' name='inputtodo' onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
      {todo?.map((ele)=><SingleTodo key={ele.tasks} title={ele.tasks} status={ele.tstatus} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>)}
      </div>
  )
}
