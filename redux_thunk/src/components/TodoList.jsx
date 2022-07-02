import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { getTodos } from '../redux/action';

export const TodoList = () => {
  const todos = useSelector((state)=>state.todo);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getTodos());
  },[])
  return (
    <div>
      {todos?.map((ele)=><div key={ele.id}>
        <h3>{ele.title}</h3>
      </div>)}
    </div>
  )
}
