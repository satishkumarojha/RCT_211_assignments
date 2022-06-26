import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { editTodosFailure, editTodosLoading, editTodosSuccess } from '../redux/Todo/action';
export const Edit = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const[change,setChange]= useState("");
    const handleChange = (e)=>{
        setChange(e.target.value);
    }

    const handleEdit = (id)=>{
        dispatch(TodosLoading());
        axios.patch(`http://localhost:8080/todos/${id}`,{
            title:change
        })
        .then((r)=>{
            // console.log(r.data);
            dispatch(editTodosSuccess(r.data))
            setChange("");
            navigate("/");
        })
        .catch((e)=>dispatch(editTodosFailure()));
    }
  return (
    <div>
        <input type="text" placeholder='Edit here' onChange={handleChange} />
        <button onClick={()=>handleEdit(id)}>Edit</button>
    </div>
  )
}
