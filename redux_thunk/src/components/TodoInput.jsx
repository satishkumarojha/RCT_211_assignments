import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { getTodos, postTodos } from '../redux/action';
export const TodoInput = () => {
    const[info,setInfo] = useState("");
    const dispatch = useDispatch();
    const handleChange = (e)=>{
        setInfo(e.target.value);
    }
    const handleAdd = ()=>{
      setInfo("");
      dispatch(postTodos(info));
    }
  return (
    <div>
        <input type="text" placeholder='input todo'onChange={handleChange} value={info}/>
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}
