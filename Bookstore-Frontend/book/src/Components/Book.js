import React, { useState, useEffect } from 'react'
import BookDisplay from './BookDisplay'

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

  return (
    <div>
         {book.map((b) => { 
            return <BookDisplay image={b.book_image} author={b.author} url={b.book_uri} description={b.description}/>  
         })}
    </div>
  )
}
