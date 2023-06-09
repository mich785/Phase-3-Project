import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/Reviews.css";

function Reviews() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bookId, setBookId] = useState();
    const [review, setReview] = useState("");
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();
    const { bookId: paramBookId } = useParams();

    useEffect(() => {
        // Fetch reviews for the specific book from the database
        fetch(`http://localhost:9292/book/${paramBookId}/reviews`)
            .then((response) => response.json())
            .then((data) => {
                setBookId(data.bookId);
                setReviews(data.reviews);
            })
            .catch((error) => {
                console.log("Error retrieving reviews", error);
            });
    }, [paramBookId]);

    function handleSubmit(e) {
        e.preventDefault();

        if (review !== "") {
            const newReview = { name: name, review: review, likes: 0, bookId: bookId };

            fetch("http://localhost:9292/reviews", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newReview),
                })
                .then((response) => {
                    if (response.ok) {
                        return fetch(`http://localhost:9292/book/${paramBookId}/reviews`);
                    } else {
                        throw new Error("Error submitting review to the API");
                    }
                })
                .then((reviewsResponse) => reviewsResponse.json())
                .then((reviewsData) => {
                    setReviews(reviewsData);
                })
                .catch((error) => {
                    alert("Error submitting review to the API", error);
                });

            setReview("");
        } else {
            alert("Please provide all required information to leave a review.");
        }
    }


    function handleLikes(index) {
        const likedReviews = [...reviews];
        likedReviews[index].likes += 1;
        setReviews(likedReviews);
    }

    return ( <
        div className = "reviews-container" >
        <
        div className = "review-form" >
        <
        h2 className = "title" > Leave a review < /h2>

        <
        form onSubmit = { handleSubmit } >
        <
        textarea rows = { 5 }
        cols = { 50 }
        value = { review }
        onChange = {
            (e) => setReview(e.target.value) }
        />

        <
        input type = "text"
        value = { name }
        placeholder = "Your name"
        onChange = {
            (e) => setName(e.target.value) }
        />

        <
        input type = "email"
        value = { email }
        placeholder = "Your email"
        onChange = {
            (e) => setEmail(e.target.value) }
        />

        <
        input type = "number"
        value = { bookId }
        placeholder = "Book ID"
        onChange = {
            (e) => setBookId(e.target.value) }
        /> <
        br / >
        <
        button type = "submit"
        className = "submit" >
        Submit <
        /button> <
        /form>

        <
        hr / >

        <
        div className = "review-list" >
        <
        h2 > Past reviews < /h2>

        {
            reviews.map((review, index) => ( <
                div key = { index }
                className = "review" >
                <
                p > { review.review } < /p> <
                h4 > -{ review.name } < /h4>

                <
                div className = "likes" >
                <
                button onClick = {
                    () => handleLikes(index) } > { review.likes === 1 ? "Like" : "Likes" }({ review.likes }) <
                /button> <
                /div> <
                /div>
            ))
        } <
        /div> <
        /div> <
        /div>
    );
}

export default Reviews;