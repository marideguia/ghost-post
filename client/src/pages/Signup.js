import {React, useEffect,useState } from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import "./Login.css";


function Signup() {
  
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "username is in use",
  };



  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      // Username dupe found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
    else{
      setIsSubmitted(true)
    }
  }

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label className="login-label">Username </label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>

          <div className="input-container">
            <label className="login-label">Password</label>
            <input type="text" name="pass" required />
          </div>

          <div className="btns-container">
          
          <div className="button-container">
            <input className="lp-button" type="button" value = "Sign Up"/>
          </div>
          </div>
          
          
        </form>
        <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
      </div>
  );

  return (
    <div className="app">
      <h1 className="signup-header1">Create an account</h1>
      <div className="signup-form">
      
       
        {isSubmitted ? <div>User is successfully signed up</div> : renderForm}
      </div>
    </div>
  );
}


export default Signup;
