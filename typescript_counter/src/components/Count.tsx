import React from 'react'
interface countProps{
    count:number;
}
export const Count = ({count}:countProps) => {
  return (
    <div>
        <h1>Counter App</h1>
        <h3>Counter:{count}</h3>
    </div>
  )
}
