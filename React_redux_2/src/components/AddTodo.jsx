import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux/es/exports';
import { postTodosFailure, postTodosLoading, postTodosSuccess } from '../redux/Todo/action';
export const AddTodo = () => {
  const[task,setTask] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e)=>{
    setTask(e.target.value);
  }
  const handleClick = ()=>{
    dispatch(postTodosLoading());
    axios.post("http://localhost:8080/todos",{
      title:task,
      val:false
    })
    .then((r)=>dispatch(postTodosSuccess(r.data)))
    .catch((e)=>dispatch(postTodosFailure()))
    setTask("");
  }
  return (
    <div>
        <h1>Add Todo</h1>
        <input type="text" placeholder='Enter task' value={task} onChange={handleChange} />
        <button onClick={handleClick}>+</button>
    </div>
  )
}
