import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import CartItem from './CartItem';
import Navbar from './Navbar';

export default function Cart() {
  const [book, setBook] = useState([]);
  const [cart, setCart] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/books/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
      })
      .catch((error) => {
        console.log('Error fetching book data', error);
      });
  }, [id]);

  //function addCart(newItem) {
   // setCart((prevCart) => [...prevCart, newItem]);
  //}

  return (
    <>
      <Navbar />
      <div className='container p-4'>
        <h2>Cart</h2>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            author={item.author}
            image={item.image}
            title={item.title}
            description={item.description}
            amazon={item.amazon_product_url}
            publisher={item.publisher}
          />
        ))}
      </div>
    </>
  );
}
