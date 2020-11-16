import React, { useState, useSelector } from "react";
import { connect } from 'react-redux'

import './index.css';

function Form(props) {

    // const dispatch = useDispatch();
    const userLogin = useSelector(state => state.state.userValue);

    const validate = () => {
        console.log(this.userValue)

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        validate()
    }

    return (

        <form onSubmit={handleSubmit} className="Login--header--form" >
            <label className="Label--username">   <input onChange={props.nameChanged} value={props.userValue} className="Input username" type="text" id="username" name="username" placeholder="Username" /></label>
            <label className="Label--password">  <input onChange={props.passwordChanged} value={props.passwordValue} className="Input password" type="text" id="password" name="password" placeholder="Password" /></label>
            <button type="submit" className="Login--header--button"><span className="Login--header--text">Sign In</span></button>
            <p>{props.userValue}</p>
        </form >
    );
}

const mapStateToProps = (state) => {
    return {
        userValue: state.userValue,
        passwordValue: state.passwordValue
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        nameChanged: (e) => {
            console.log(e.target.value)

            const action = { type: "INPUT_CHANGE", username: e.target.value }
            dispatch(action);
        },
        passwordChanged: (e) => {
            console.log(e.target.value)
            const action = { type: "PASSWORD_CHANGE", password: e.target.value }
            dispatch(action);
        }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Form)