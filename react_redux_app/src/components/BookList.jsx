import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux/es/exports';
import { getBooks } from '../redux/action';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { SingleBook } from './SingleBook';
import { useLocation, useSearchParams } from 'react-router-dom';
export const BookList = () => {
  const dispatch = useDispatch();
  const[searchParams] = useSearchParams();
  const books = useSelector((state)=>state.books);
  const location = useLocation();
  useEffect(()=>{
    if(books.length==0||location.search){
     const sortby = searchParams.get("sortby");
      const getBooksParams = {
        params:{
          category:searchParams.getAll("category"),
          _sort:sortby && "release_year",
          _order:sortby
        }
      }
      dispatch(getBooks(getBooksParams)); 
    }
  },[location.search]);
  console.log(location.search);
  return (
    <div className='list_container'>
      {books?.map((ele)=><SingleBook key={ele.id} image={ele.cover_photo} category={ele.category} title={ele.book_name} year={ele.release_year}/>)}

    </div>
  )
}
