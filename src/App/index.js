import './index.css';
// import { connect } from "react-redux"
import Form from "./components/form"
import store from "../store"
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <div className="Login">
          <div className="Login--header">
            <span className="Login--header--text">Login Form</span>
          </div>
          <Form store={store} />
          {/* <form action="submit" className="Login--header--form">
          <label className="Label--username">   <input value="props.userValue" className="Input username" type="text" id="username" name="username" placeholder="Username" /></label>
          <label className="Label--password">  <input value="props.passwordValue" className="Input password" type="text" id="password" name="password" placeholder="Password" /></label>
          <button className="Login--header--button"><span className="Login--header--text">Sign In</span></button>
        </form> */}
        </div>
      </div>
    );
  }
}

// export default connect(mapStateToProps)App;
export default App;