import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Styles/reviews.css";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar'

function Reviews() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bookId, setBookId] = useState();
    const [review, setReview] = useState("");
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();
    const { bookId: paramBookId } = useParams();


    useEffect(() => {
        // Fetch book data from database 
        fetch(`http://localhost:9292/book/${paramBookId}`)
            .then((response) => response.json())
            .then((data) => {
                setBookId(data.id);
            })
            .catch((error) => {
                console.log("Error retrieving book data", error);
            });
    }, [paramBookId]);

    function handleSubmit(e) {
        e.preventDefault();

        if ( review) {
            const newReview = { name: name, review: review, likes: 0, bookId: bookId };
            setReviews([...reviews, newReview]);
            setReview("");
        } else {
            console.log("Please provide all required information.");
        }
        navigate("/book")
    }

    function handleLikes(index) {
        const likedReviews = [...reviews];
        likedReviews[index].likes += 1;
        setReviews(likedReviews);
    }

    return ( 
        <>
        <Navbar/>
      <div className = "reviews-container">
        <div className = "review-form">
        <h2 className = "title"> Leave a review </h2> 

        <form onSubmit = { handleSubmit }>
          <textarea rows = { 5 }
          cols = { 50 }
          // placeholder="What was your experience?"
          value = { review }
          onChange = {
              (e) => setReview(e.target.value) }/>

          <input type = "text"
           placeholder="Your user name ..."
          value = { name }
          onChange = {
              (e) => setName(e.target.value) }
          // Added readOnly attribute to prevent editing 
          />

          <input type = "email"
          placeholder = "Your email ..."
          value = { email }
          onChange = {
              (e) => setEmail(e.target.value) }
           // Added readOnly attribute to prevent editing
          />

          <input type = "number"
          // placeholder="Book ID ..."
          value = { bookId }
          onChange = {
              (e) => setBookId(e.target.value) }
           />
          <br/>
          <button type = "submit" className = "submit">Submit </button> 
       </form>

        <hr/>

        <div className = "review-list">
        <h2 > Past reviews </h2>

        {
            reviews.map((review, index) => ( 
              <div key = { index }
                className = "review" >
                <p > { review.review } </p> 
                <h4> -{ review.name } </h4>

                <div className = "likes">
                <button onClick = {() => handleLikes(index) } > { review.likes === 1 ? "Like" : "Likes" }({ review.likes }) </button> 
                </div> 
                </div>
            ))
        } 
        </div> 
        </div> 
        </div>
        </>
    );
}

export default Reviews;