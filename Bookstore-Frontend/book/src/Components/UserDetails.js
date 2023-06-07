import React, { useState } from "react";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";
import "../Styles/UserDetails.css"

function UserDetails() {
    const [name, setName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        const userDetails = {
            name: name,
            dateOfBirth: dateOfBirth,
            userName: userName,
            email: email,
            mobile: mobile,
        };

        fetch("http://localhost:9292", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userDetails),
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network Error");
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log("Error", error);
            });

        setName("");
        setDateOfBirth("");
        setMobile("");
        setUserName("");
        setEmail("");

        navigate("/login");
    }

    //   function handleNull() {
    //     if (
    //       name.trim() !== "" &&
    //       email.trim() !== "" &&
    //       mobile.trim() !== "" &&
    //       userName.trim() !== "" &&
    //       dateOfBirth !== ""
    //     ) {
    //       handleSubmit();
    //     }
    //   }

    return ( <
        div >
        <
        div className = "signup-container" >
        <
        div className = "signup-form" >
        <
        form onSubmit = { handleSubmit }
        className = "form" >
        <
        p > Let 's get you started</p> <
        h3 > Register Your Account < /h3> {
            /* <label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                </label> */
        } {
            /* <label>
                                <input
                                    type="text"
                                    name="dateOfBirth"
                                    placeholder="Enter your date of birth"
                                    value={dateOfBirth}
                                    onChange={(e) => setDateOfBirth(e.target.value)}
                                />
                                </label> */
        } <
        label >
        <
        input type = "text"
        name = "userName"
        placeholder = "Enter your username"
        value = { userName }
        onChange = {
            (e) => setUserName(e.target.value) }
        /> <
        /label> <
        label >
        <
        input type = "email"
        name = "email"
        value = { email }
        placeholder = "Enter your Email"
        onChange = {
            (e) => setEmail(e.target.value) }
        /> <
        /label> <
        label >
        <
        input type = "tel"
        name = "mobile"
        value = { mobile }
        placeholder = "Enter your phone number"
        onChange = {
            (e) => setMobile(e.target.value) }
        /> <
        /label> <
        div className = "submit-container" >
        <
        button type = "submit" > Submit < /button> <
        /div> <
        /form> <
        /div> <
        /div> <
        /div>
    );
}

export default UserDetails;