import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./LoginPage";
import "../Styles/home.css"
import Header from "./Header";

function Home() {
    return ( 
      <div >
        <div className = "home" >
        <Header/>
        <br/>
        <LoginPage/>
        <div className = "alternative" >
        <p> Don 't have an account? <Link to ="/signup">Sign Up</Link> </p>

        </div> 
        </div>

        </div>
    );
}
export default Home;