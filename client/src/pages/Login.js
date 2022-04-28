import React,{useEffect,useState } from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import "./Login.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

 
function Login() {
  
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [userPWD, setPWD] = useState("");
  let navigate = useNavigate();
  

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

  const onUserChange = (event) => {
    setEmail(event.target.value);
  }

  const onPWDChange = (event) => {
    setPWD(event.target.value);
  }

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
   // const userData = database.find((user) => user.username === uname.value);4
   const data = {email:email,password:userPWD}
   axios.post('http://localhost:3000/auth/login',data).then((res)=>{
     console.log(res.data);
     navigate('/Home');
   })

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
            <label className="login-label">Email </label>
            <input 
            type="text" 
            name="uname"
            style={{textTransform:'none'}}
            onChange={onUserChange} required />
            {renderErrorMessage("uname")}
          </div>

          <div className="input-container">
            <label className="login-label">Password </label>
            <input 
            type="password" 
            name="pass" 
            className="pwdBtn"
            style={{textTransform:'none'}}
            onChange={onPWDChange} required />
            {renderErrorMessage("pass")}
          </div>

          <div className="btns-container">
          <div className="l-button-container">
            <input className="lp-button" type="submit" value = "Login"/>
          </div>
          
         
            <div className="l-button-container2">              
              <Link to="Signup" >
                <button className="lp-button">
                  Sign up
                </button>
              </Link> 
            </div>
          

          {/* <h3 className="login-header3"><center>OR</center></h3>

            <div className="button-container" id="join-sess">              
              <Link to="Joinsession" >
                <button className="lp-button" >
                  Join Session
                </button>
              </Link> 
            </div> */}

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
