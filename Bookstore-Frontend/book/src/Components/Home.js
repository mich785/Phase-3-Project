import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./LoginPage";
import "../Styles/Home.css"

function Home() {
    return ( <
        div >
        <
        div className = "home" >
        <
        br / >
        BookNest <
        hr / >
        <
        h1 > Welcome to the Home Page < /h1>

        <
        br / >
        <
        br / >
        <
        LoginPage / >
        <
        div className = "alternative" >
        <
        p > Don 't have an account? <Link to ="/signup">Sign Up</Link> </p>

        <
        /div> <
        /div>

        <
        /div>
    );
}
export default Home;