import axios from "axios";
import { GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, POST_TODOS_FAILURE, POST_TODOS_REQUEST, POST_TODOS_SUCCESS } from "./actionTypes"

export const getTodos = ()=>(dispatch)=>{
    dispatch({type:GET_TODOS_REQUEST});
    axios.get("http://localhost:8080/todos")
    .then((r)=>dispatch({type:GET_TODOS_SUCCESS,payload:r.data}))
    .catch((e)=>dispatch({type:GET_TODOS_FAILURE,payload:e}))
};
export const postTodos = (task)=>(dispatch)=>{
    dispatch({type:POST_TODOS_REQUEST});
    axios.post("http://localhost:8080/todos",{
        title:task,
        value:false
    })
    .then((r)=>dispatch({type:POST_TODOS_SUCCESS}))
    .then(()=>dispatch(getTodos()))
    .catch((e)=>dispatch({type:POST_TODOS_FAILURE}))
};