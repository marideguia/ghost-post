import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import "../styles.css";

function Login() {
  // let navigate=useNavigate()
  // React States
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
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

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
            <label>Username </label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
            <input type="submit" value = "Login"/>
          </div>
          
          <div className="button-container">
            <input type="button" value = "Sign Up"/>
          </div>
          <p><center>or</center></p>
          <div className='dual-button-cont'>
            <div className="button-container">
              <Link to="Joinsession" className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue ma2">Join Session</Link> 
            </div>
            <div className="button-container">
              <Link to="CreateSession" className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue ma2">Create Session</Link> 
            </div>
          </div>
          
        </form>
      </div>
  );

  return (
    <div className="app">
      <h1 className="grow tc">Ghost Post Sign In</h1>
      <div className="login-form">
       
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}


export default Login;