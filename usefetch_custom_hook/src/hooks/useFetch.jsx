import { useState } from "react";
import { useEffect } from "react"

const useFetch = (url)=>{
    const[data,setData] = useState([]);
    const[loading,setLoading]= useState(true);
    const[error,setError] = useState(false);
    const getData = async()=>{
        try{
            let res = await fetch(url);
            let users = await res.json();
            setData([...users]);
            setLoading(false);
        }
        catch(e){
            setError(true);
        }
        
    }

    useEffect(()=>{
        getData();
    },[url])

    return {data,loading,error};
}

export {useFetch};