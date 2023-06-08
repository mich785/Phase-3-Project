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
    <div className="col-2 card m-3" key={id}>  
                <img className="card-img-top img-thumbnail" src={image} alt="cover"/>
                <div className="card-body">
                <h5 className="card-text font-italic">{title}</h5> 
                <h5 className="card-title text-muted">{author}</h5>          
                <p className="card-text">Description: {description}</p>
                <p className="card-text">Publisher: {publisher}</p>
                <button type="button" onClick={event =>  window.location.href=`${amazon}`}  className="btn btn-outline-success m-2">Purchase</button> 
                </div>
      </div>
    </>
  );
}
