import './index.css';
import React, { useEffect } from "react";
import Form from "./components/form"
import store from "../store"
import { Component } from 'react';

const App = () => {


  const getData = () => {
    if ((localStorage.getItem('token')) === ('11111')) {

      alert("you are connected!!");
      // alert("you are connected")
    } else {
      console.log("no token")
    }
  }



  useEffect(() => {
    getData();
  }, [getData]);




  return (
    <div className="App" >
      <div className="Login">
        <div className="Login--header">
          <span className="Login--header--text">Login Form</span>
        </div>
        <Form store={store} />
      </div>
    </div>
  );

}

// export default connect(mapStateToProps)App;
export default App;