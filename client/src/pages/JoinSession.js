import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link, useNavigate } from 'react-router-dom';
import "./JoinSession.css";
import axios from "axios";

function JoinSession() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [codeVal, setCodeVal] = useState("");
  
  let navigate = useNavigate();
  let currentUserID = localStorage.getItem('UserID')


  const errors = {
    sesscode: "invalid session code"
  };

  const onCodeChange = (event) => {
    //event.preventDefault();
    setCodeVal(event.target.value);
   
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    console.log(codeVal);

    axios.post('http://localhost:3000/sessions/addUserSession',{
      code : codeVal,
      UserID: currentUserID 
    }).then(res=>{
      const id = res.data.SessionID; //Update routes to take user to posts if session is active or to archive is session is inactive
      navigate(`/Posts/${id}`);
      
    })

  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for joining session form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input 
          className="enter-code" 
          type="searchText" 
          name="sesscode" 
          placeholder="Enter session code" required
          onChange={onCodeChange} />
          {renderErrorMessage("sesscode")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
      
    </div>
  );

  return (
    
    <div className="app">
    
      <div className="joinsession-form">
        <div className="tc grow"><h1 className="login-header1">Join Session</h1></div>
        {isSubmitted ? <div>Joining Senior Capstone 1</div> : renderForm}
      </div>
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
}

const rootElement = document.getElementById("root");
ReactDOM.render(<joinsession />, rootElement);

export default JoinSession;