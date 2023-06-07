import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import LoginPage from "./Components/LoginPage";

function Home() {
    return ( <
        div >
        <
        h1 > Welcome to the Home Page < /h1> <
        p > Please log in to
        continue. < /p> <
        Link to = "/login" > Login < /Link> <
        p > Or create account to
        continue < /p> <
        Link to = "/signup" > Sign Up < /Link> <
        /div>
    );
}
export default Home;