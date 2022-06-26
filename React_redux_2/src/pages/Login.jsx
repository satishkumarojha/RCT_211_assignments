import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux/es/exports';
import {useNavigate,useLocation} from "react-router-dom";
import { useSelector } from 'react-redux';
import { authTodosFailure, authTodosLoading, authTodosSuccess } from '../redux/Auth/action';
export const Login = () => {
    const loading = useSelector((state)=>state.auth.isLoading);
    const token = useSelector((state)=>state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
  
    const[info,setInfo] = useState({
        email:"eve.holt@reqres.in",
        password:"cityslicka"
    })
    const handleChange = (e)=>{
        let{name,value} = e.target;
        setInfo({...info,[name]:value});
    }
    const handleLogin = ()=>{
        dispatch(authTodosLoading());
        axios.post("https://reqres.in/api/login",{
            email:info.email,
            password:info.password
        }).then((r)=>{
            dispatch(authTodosSuccess(r.data))
            navigate("/")
        })
        .catch((e)=>dispatch(authTodosFailure(e)));
    }
    useEffect(() => {
        if (token) {
          navigate(location.state.pathname || "/", { replace: true });
        }
      }, [navigate, token]);
    // console.log(info);
  return (
    <div>
        <input type="text" name='email' placeholder='Enter email' value={info.email} onChange={handleChange} />
        <input type="password" name='password' value={info.password} placeholder='Enter password' onChange={handleChange} />
        <button onClick={handleLogin}>{loading?"Loading...":"Login"}</button>
    </div>
  )
}
