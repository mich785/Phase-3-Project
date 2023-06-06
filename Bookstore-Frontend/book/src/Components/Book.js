import React, { useState, useEffect } from 'react'
import BookDisplay from './BookDisplay'
import Header from './Header'
import Cart from './Cart'

export default function Book() {
    const [book,setBook] = useState([])  

    useEffect(() => {
        fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=USLX52voDPN51lzOHNAI3HC5jGGKxcSG")
        .then(response => response.json())
        .then(data => {
            setBook(data.results.books) 
            console.log(data.results.books) 
        })  
    },[] )
    //console.log(book.results) 

    function handleCart(id){
        console.log(id) 
    }

  return (
    <div className='container p-4'> 
            <Header/>  
        <div className='row'> 
            {book.map((b) => { 
                return <BookDisplay handleCart={handleCart} id={b.rank} amazon={b.amazon_product_url} image={b.book_image} author={b.author} description={b.description}/>  
            })}
         </div>

         <Cart />
    </div>
  )
}
