import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux/es/exports';
import {Link} from 'react-router-dom';
import './check.css'
import { getTodosFailure, getTodosLoading, getTodosSuccess, removeTodosFailure, removeTodosLoading, removeTodosSuccess, toggleTodosFailure, toggleTodosLoading, toggleTodosSuccess } from '../redux/Todo/action';
export const TodoList = () => {
  const todos = useSelector((state)=>state.todos.todo);
  const dispatch = useDispatch();
  const[remaining,setRemaining] = useState();
  const getTodos = ()=>{
    dispatch(getTodosLoading());
    axios.get("http://localhost:8080/todos")
    .then((r)=>dispatch(getTodosSuccess(r.data)))
    .catch((e)=>dispatch(getTodosFailure()));
  }
  const handleRemove = (id)=>{
    console.log(id);
    dispatch(removeTodosLoading());
    axios.delete(`http://localhost:8080/todos/${id}`)
    .then((r)=>dispatch(removeTodosSuccess(id)))
    .then((e)=>dispatch(removeTodosFailure()));
  }
  const handleChange = (id,newstatus)=>{
    // console.log(id);
    dispatch(toggleTodosLoading());
    axios.patch(`http://localhost:8080/todos/${id}`,{
        val:newstatus
    })
    .then((r)=>{
        // console.log(r.data);
        dispatch(toggleTodosSuccess(r.data))
        // setChange("");
        // navigate("/");
    })
    .catch((e)=>dispatch(toggleTodosFailure()));
  }
  useEffect(()=>{
    getTodos();
  },[])
  useEffect(()=>{
    let count=0;
    let len = todos.map((ele)=>ele.val==false?count+=1:count+=0);
    setRemaining(count);
  },[todos]);
  return (
    <div>
      <h1>total-task:{todos.length}remaining-task:{remaining}</h1>
      {todos?.map((ele)=>{
        return <div key={ele.id}>
          <input type="checkbox" checked={ele.val?true:false} onChange={()=>handleChange(ele.id,!ele.val)} />
          
          <p className={ele.val?"check":"not-check"}>{ele.title}</p>
          {/* <button>Toggle</button> */}
          <Link to={`/todos/${ele.id}`}><button>Edit</button></Link>
          <button onClick={()=>handleRemove(ele.id)}>Remove</button>
          </div>
      })}
    </div>
  )
}
