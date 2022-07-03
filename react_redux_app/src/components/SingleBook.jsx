import React from 'react'
import '../App.css'
export const SingleBook = ({image,title,year,category}) => {
  return (
    <div className='single_book'>
        <img src={image} alt="books_img" />
        <h1>{title}</h1>
        <p>Category:{category}</p>
        <p>Year:{year}</p>
    </div>
  )
}
