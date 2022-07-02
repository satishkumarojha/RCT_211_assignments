import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { getTodos } from '../redux/action'
import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'

export const Todo = () => {
  

  
  // console.log(todos);
  return (
    <div>
        <h1>Todo App</h1>
        <TodoInput/>
        <TodoList/>
    </div>
  )
}
