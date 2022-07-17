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
    setTodo([...todo,payload]);
    setInfo("");
}
console.log(todo);
  return (
    <div>
      <input type="text" placeholder='Enter Input' name='inputtodo' onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
      {todo?.map((ele)=><SingleTodo title={ele.tasks} status={ele.tstatus}/>)}
      </div>
  )
}
