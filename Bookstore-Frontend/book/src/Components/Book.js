import React, { useState, useEffect } from 'react'
import BookDisplay from './BookDisplay'
import Header from './Header'
import Cart from './Cart'
import BookSearch from './BookSearch'

export default function Book() {
    const [book,setBook] = useState([]) 
    const [cart,setCart] = useState([]) 

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
        fetch(`http://localhost:9292/books/${id}`)  
        .then(response => response.json())
        .then(data => {
            addCart(data) 
            console.log(data) 
        }) 
    }

    function addCart(newItem){
        setCart([...cart,newItem]) 

    }

    function handleReviews(id){
        console.log(id)  
    }

  return (
    <div className='container p-4'> 
            <Header/> 
            {cart.map((b) => {
                return <Cart id={b.id} amazon={b.amazon_product_url} image={b.book_image} description={b.description} author={b.author} title={b.title}/>
            })} 
            <BookSearch />
        <div className='row'> 
            {book.map((b) => { 
                return <BookDisplay handleReviews={handleReviews} handleCart={handleCart} id={b.id} image={b.book_image} author={b.author} title={b.title} />  
            })}
         </div>

         <Cart />
    </div>
  )
}
