import {React, useEffect,useState } from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import "./Login.css";


function Login() {
  
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
            <label className="login-label">Username </label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>

          <div className="input-container">
            <label className="login-label">Password</label>
            <input type="text" name="pass" required />
            {renderErrorMessage("pass")}
          </div>

          <div className="btns-container">
          <div className="button-container">
            <input className="lp-button" type="submit" value = "Login"/>
          </div>
          
          <div className='btns-container'>
            <div className="button-container">              
              <Link to="Signup" >
                <button className="lp-button">
                  Sign up
                </button>
              </Link> 
            </div>
            </div>

          <h3 className="login-header3"><center>OR</center></h3>

          {/* <div className='dual-button-cont'> */}
            <div className="button-container" id="join-sess">              
              <Link to="Joinsession" >
                <button className="lp-button" >
                  Join Session
                </button>
              </Link> 
            </div>

            {/* <div className="button-container">
            <Link to="CreateSession" >
                <button className="lp-button">
                  Create Session
                </button>
              </Link>  
            </div> */}
          {/* </div> */}

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
      <h1 className="login-header1">Welcome to GhostPost</h1>
      <div className="login-form">
      
       
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}


export default Login;
