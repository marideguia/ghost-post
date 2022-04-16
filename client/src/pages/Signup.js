import {React, useEffect,useState } from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import validator from "validator";
import "./Login.css";


function Signup() {
  
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userVal, setUserVal] = useState("");
  const [userEmail, setEmailVal] = useState("");
  const [userSchool, setSchoolVal] = useState("");
  const [userPhone, setPhoneNum] = useState("");
  const [userPWD, setPWD] = useState("");

  // const [sessionState,setSessionState]= useState({
  //   username:'asdfg',
  //   password:''
  // });

  const onUserChange = (event) => {
    setUserVal(event.target.value);
  }

  const onEmailChange = (event) => {
    setEmailVal(event.target.value);
  }

  const onSchoolChange = (event) => {
    setSchoolVal(event.target.value);
  }

  const onPhoneChange = (event) => {
    setPhoneNum(event.target.value);
  }

  const onPWDChange = (event) => {
    setPWD(event.target.value);
  }


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
    fetch('http://localhost:3000/register',{
      method: 'post',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        username: userVal,
        email: userEmail,
        school: userSchool,
        phone: userPhone,
        password: userPWD
      })
    })
    .then(response => response.json())
    .then(user => {
      if (user){
        
        alert("success");
      }else{
        alert("fail");
      }
    })

    // var { uname, pass } = document.forms[0];

    // // Find user login info
    // const userData = database.find((user) => user.username === uname.value);

    // // Compare user info
    // if (userData) {
    //   // Username dupe found
    //   setErrorMessages({ name: "uname", message: errors.uname });
    // }
    // else{
    //   setIsSubmitted(true)
    // }
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
            <input 
            type="text" 
            name="uname" 
            onChange={onUserChange}
            required />
            {renderErrorMessage("uname")}
          </div>

          <div className="input-container">
            <label className="login-label">Email</label>
            <input 
            type="text" 
            name="email" 
            onChange={onEmailChange}
            required />
          </div>

          <div className="input-container">
            <label className="login-label">School</label>
            <input 
            type="text" 
            name="school" 
            onChange={onSchoolChange}
            required />
          </div>

          <div className="input-container">
            <label className="login-label">Phone</label>
            <input 
            type="text" 
            name="phone" 
            onChange={onPhoneChange}
            required />
          </div>

          <div className="input-container">
            <label className="login-label">Password</label>
            <input 
            type="text" 
            name="pass" 
            onChange={onPWDChange}
            required />
          </div>

          <div className="btns-container">
          
          <div className="button-container">
            <input className="lp-button" type="submit" value = "Sign Up"/>
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
      <h1 className="signup-header1">Create an Account</h1>
      <div className="signup-form">
      
       
        {isSubmitted ? <div>User is successfully signed up</div> : renderForm}
      </div>
    </div>
  );
}


export default Signup;
