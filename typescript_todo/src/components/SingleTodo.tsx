import React from 'react'
interface singleProps{
    title:string;
    status:boolean;
    toggleTodo:(val:string)=>void;
    deleteTodo:(val:string)=>void;
}
export const SingleTodo = ({title,status,toggleTodo,deleteTodo}:singleProps) => {
    const handleToggle = (val:string)=>{
        toggleTodo(val);
    }
  return (
    <div>
        <h3>{title}</h3>
        <p>{status?"done":"Not-Done"}</p>
        <button onClick={()=>handleToggle(title)}>Toggle</button>
        <button onClick={()=>deleteTodo(title)}>Delete</button>
    </div>
  )
}
