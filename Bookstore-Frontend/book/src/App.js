import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUp from "./Components/SignUp";
import LoginPage from "./Components/LoginPage";
import Home from "./Components/Home";
import Reviews from "./Components/Reviews";
import Book from "./Components/Book"
import BookDisplay from "./Components/BookDisplay";
import Cart from "./Components/Cart";

export default function App() {
    return (
    <BrowserRouter>
        <Routes >
          <Route path = "/signup" element = {<SignUp/>}/> 
          <Route path = "/login" element = {<LoginPage/>}/> 
          <Route path = "/" element = {<Home/>}/> 
          <Route path = "/reviews" element = {< Reviews/>}/> 
          <Route path = "/book" element = {<Book/>}/> 
          <Route path = "/bookdisplay" element = {<BookDisplay/>}/> 
          <Route path = "/cart" element = {<Cart/>}/> 
         </Routes> 
      </BrowserRouter>
    )
}