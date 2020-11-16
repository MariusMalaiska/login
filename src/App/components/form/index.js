import React, { useState, useSelector } from "react";


import './index.css';

function Form(props) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");


    const callApi = e => {

        if (name === "frontend@isawesome.com" || password === "cool") {
            localStorage.setItem('token', '11111');
        } else {
            setErrors("User does not exist");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        setErrors("")
        if (callApi()) {
            // register(nickName, password, email);
            console.log(name, password)
        }
    }

    return (

        <form onSubmit={handleSubmit} className="Login--header--form" >
            <label className="Label--username">   <input onChange={e => setName(e.target.value)} className="Input username" type="text" id="username" name="username" placeholder="Username" /></label>
            <label className="Label--password">  <input onChange={e => setPassword(e.target.value)} className="Input password" type="text" id="password" name="password" placeholder="Password" /></label>
            {!!errors && <div className="Input-error">{errors}</div>}
            <button type="submit" className="Login--header--button"><span className="Login--header--text">Sign In</span></button>
            <p>{props.userValue}</p>
        </form >
    );
}








export default Form