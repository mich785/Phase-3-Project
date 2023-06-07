import React, { useState } from "react";


function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        // Validate the login email
        fetch("path/to/db.json") // Replace with the actual path to your db.json file
            .then((response) => response.json())
            .then((data) => {
                const users = data.users;


                const existingUser = users.find((user) => user.email === email);

                if (existingUser) {

                    console.log("Login successful");
                } else {

                    console.log("Invalid login email");
                }
            })
            .catch((error) => {
                console.log("Error retrieving user data", error);
            });

        setEmail("");
        setPassword("");
    }

    return ( <
        div >
        <
        form onSubmit = { handleSubmit }
        className = "form" >
        <
        p > Welcome back!Please log in . < /p> <
        h3 > Login < /h3> <
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
        input type = "password"
        name = "password"
        value = { password }
        placeholder = "Enter your Password"
        onChange = {
            (e) => setPassword(e.target.value) }
        /> <
        /label> <
        div className = "submit-container" >
        <
        button type = "submit" > Login < /button> <
        /div> <
        /form> <
        /div>
    );
}

export default LoginPage;