import React from 'react'
interface buttonProps{
    setCount:()=>void;
    label:string;
}
export const Button = ({label,setCount}:buttonProps) => {
  return (
    <button onClick={setCount}>{label}</button>
  )
}
