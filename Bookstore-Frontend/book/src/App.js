import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import LoginPage from "./Components/LoginPage";
import Home from "./Components/Home";
import Reviews from "./Components/Reviews";

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
        Route path = "/reviews"
        element = { < Reviews / > }
        />   <
        Route path = "/books"
        element = { < Books / > }
        /> <
        /Routes> <
        /Router>
    );
}

export default App;