import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux/es/exports';
import { getBooks } from '../redux/action';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { SingleBook } from './SingleBook';
export const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state)=>state.books);
  useEffect(()=>{
    if(books.length==0){
      dispatch(getBooks()) 
    }
  },[]);
  
  return (
    <div className='list_container'>
      {books?.map((ele)=><SingleBook key={ele.id} image={ele.cover_photo} category={ele.category} title={ele.book_name} year={ele.release_year}/>)}

    </div>
  )
}
