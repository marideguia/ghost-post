import {React, useEffect, useState } from "react" //necessary react components
import {BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';//Imported to enable routing in app
import 'tachyons'; //CSS toolkit for styling
import './CreateSession.css' //Additional Style Sheet for Component


function CreateSession() {
  //React Use state hooks for toggling visibility of items
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [show, setShow] = useState(false);
  //React use state hook for disabling input box
  const [disabled, setDisabled] = useState(false);
  
  //Random string generator to create session codes
  var add = ''
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  for (var x =0;x<5;x++){
    add += characters.charAt(Math.floor(Math.random()*characters.length))
  }
  //Event for handling actions that occur when form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();
    //Use state Set functions to update the values in the JSX elements
    setText(event.target[0].value);
    setText2("Your session code is " + add);
    setText3("Share this code with your audience")
    setShow(true);
    setDisabled(!disabled);
  };

  return (
    // JSX elements with inline styling using Tachyons a CSS toolkit
     <div className = "center vh-50 dt w-50 bg-light-blue br3 mt6" >
       <div class="dtc v-mid tc white ph3 ph4-l">
        <h1>Ghost Post Session Generator</h1>
        <h3>Enter the title of your session below</h3>    
    <div>
      {/*Form code for allowing user to enter Session Title*/} 
    <form onSubmit={handleSubmit}>
        <input className='pa3 ba b--dark-gray ma2' type="text" placeholder="Name of Session" disabled={disabled}/>
        <button className='f5 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue' type="submit" disabled={disabled}>Submit</button>
      </form>
      <h2>{text}</h2>
      <h2>{text2}</h2>
      <h3>{text3}</h3>
      
    </div>
    <div>
    {
      //Routing Links for pages the user can navigate to
      show?<h3 className = "grow"><Link to="/Posts">Go to session</Link></h3>:null
    }
    {
      show?null:<h4 className = "grow"><Link to="/">Go back to login page</Link></h4>
    }
    </div>
   </div>  
   </div>
  );
}

export default CreateSession;