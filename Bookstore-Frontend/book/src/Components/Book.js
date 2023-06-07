import React, { useState, useEffect } from 'react'
import BookDisplay from './BookDisplay'
import Header from './Header'
import Cart from './Cart'

export default function Book() {
    const [book,setBook] = useState([])  

    useEffect(() => {
        fetch("http://localhost:9292/")
        .then(response => response.json())
        .then(data => {
            setBook(data) 
            console.log(data) 
        })  
    },[] )
    //console.log(book.results) 

    function handleCart(id){
        console.log(id) 
    }

    function handleReviews(id){
        console.log(id) 
    }

  return (
    <div className='container p-4'> 
            <Header/>  
        <div className='row'> 
            {book.map((b) => { 
                return <BookDisplay handleReviews={handleReviews} handleCart={handleCart} id={b.id} image={b.book_image} author={b.author} title={b.title} />  
            })}
         </div>

         <Cart />
    </div>
  )
}
