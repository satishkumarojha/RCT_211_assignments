import React from 'react'
interface singleProps{
    title:string;
    status:boolean;
}
export const SingleTodo = ({title,status}:singleProps) => {
  return (
    <div>
        <h3>{title}</h3>
        <p>{status?"done":"Not-Done"}</p>
        <button>Toggle</button>
        <button>Delete</button>
    </div>
  )
}
