import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import LoginPage from "./Components/LoginPage";
import Home from "./Components/Home";
import Reviews from "./Components/Reviews";
import Book from "./Components/Book"
import BookDisplay from "./Components/BookDisplay";

function App() {
    return (

        <
        Router >
        <
        Routes >

        <
        Route path = "/signup"
        element = { < SignUp / > }
        /> <
        Route path = "/login"
        element = { < LoginPage / > }
        /> <
        Route path = "/"
        element = { < Home / > }
        />  <
        Route path = "/iuyt"
        element = { < Reviews / > }
        />   <
        Route path = "/book"
        element = { < Book / > }
        /> <
        Route path = "/bookdisplay"
        element = { < BookDisplay / > }
        /> <
        /Routes> <
        /Router>
    );
}

export default App;