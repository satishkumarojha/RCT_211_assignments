import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { getBooks } from '../redux/action';
export const Filter = () => {
  const[searchParams,setSearchparams] = useSearchParams();
  const urlCategory = searchParams.getAll("category");
  const urlSortby = searchParams.get("sortBy");
  const [category,setcategory]= useState(urlCategory||[]);
  const[sortby,setSortby]=useState(urlSortby||"");
  const dispatch = useDispatch();
  const handleChange = (e)=>{
    const option = e.target.value;
    let newcategory = [...category];
    if(category.includes(option)){
      newcategory.splice(newcategory.indexOf(option),1);
    }
    else{
      newcategory.push(option);
    }
    setcategory(newcategory);
  }
  const handleSort = (e)=>{
    setSortby(e.target.value);
  }
  useEffect(()=>{
    if(category){
      setSearchparams({category});
      dispatch(getBooks({params:{category}}));
    }
  },[setSearchparams,category,dispatch]);
  useEffect(()=>{
    if(sortby){
      const params = {
        category:searchParams.getAll("category"),
        sortby
      }
      setSearchparams(params);
    }
    
  },[setSearchparams,sortby])
  return (
    <div>Filter
      <h3>category</h3>
      <input type="checkbox" name="Novel" value="Novel" defaultChecked={category.includes("Novel")} onChange={handleChange} />Novel
      <input type="checkbox" name="Science_fiction" value="Science_fiction" defaultChecked={category.includes("Science_fiction")} onChange={handleChange}/>Science_fiction
      <input type="checkbox" name="Thriller" value="Thriller" defaultChecked={category.includes("Thriller")} onChange={handleChange}/>Thriller
      <input type="checkbox" name="Motivational" value="Motivational" defaultChecked={category.includes("Motivational")} onChange={handleChange}/>Motivational
      <h3>Sort</h3>
      <input type="radio" name="sort" value="asc" onChange={handleSort} />Asc
      <input type="radio" name="sort" value="des" onChange={handleSort} />Des
    </div>
  )
}
