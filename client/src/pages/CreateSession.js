import React, {useEffect, useState } from "react" //necessary react components
import {BrowserRouter as Router, Routes, Route,Link,useNavigate } from 'react-router-dom';//Imported to enable routing in app
import 'tachyons'; //CSS toolkit for styling
import './CreateSession.css' //Additional Style Sheet for Component


function CreateSession() {
  const [sessionState,setSessionState]= useState({
    code:'asdfg',
    title:''
  });

  
  let navigate = useNavigate(); 

  //React Use state hooks for toggling visibility of items
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  var codeVal=''
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  for (var x =0;x<5;x++){
  codeVal += characters.charAt(Math.floor(Math.random()*characters.length))}
  
 // const [titleVal, setTitleVal] = useState("title");
  /*
  useEffect(()=>{
    sessionState.code = codeVal
    sessionState.title="buh"
    setSessionState({...sessionState})
 },[])*/
  
 
  const [show, setShow] = useState(false);
  //React use state hook for disabling input box
  const [disabled, setDisabled] = useState(false);
  
  //function for grabbing user input of title
  const onTitleChange = (event) => {
    //event.preventDefault();
    const val = event.target.value;
    const newCode = {code:codeVal};
    setSessionState(newCode);
    setSessionState((prevState)=>{
      return {...prevState,title:val};
    })
    //Random string generator to create session codes
    
  };

  
  //Event for handling actions that occur when form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();
   
    //Use state Set functions to update the values in the JSX elements
    //setText(event.target[0].value);
    setText("Share this code with your audience");
    setText2(sessionState.code);
    setShow(true);
    setDisabled(!disabled);

    fetch('http://localhost:3000/createSession',{
      method: 'post',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        code: sessionState.code,
        title: sessionState.title
      })
    })
    .then(response => response.json())
    .then(session => {
      if (session){
       // props.loadSession(session)
        //navigate("/Posts"); //navigate for testing purposes but we need to update front with session info
        console.log("successful fetch");
        alert("ahah success");
      }else{
        alert("alas a failure");
      }
    })

  };
 
  return (
    // JSX elements with inline styling using Tachyons a CSS toolkit
     <div className = "center vh-50 dt w-50 bg-light-blue br3 mt6" >
       <div class="dtc v-mid tc white ph3 ph4-l">
        <h1>Ghost Post Session Generator</h1>
        <h3>Enter title of your session below</h3>
    
    <div>
      {/*Form code for allowing user to enter Session Title*/} 
    <form onSubmit={handleSubmit}>
        <input 
        className='pa3 ba b--dark-gray ma2' 
        type="text" 
        placeholder="Name of Session" 
        disabled={disabled}
        onChange ={onTitleChange}
        />
        <button className='f5 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue' type="submit" disabled={disabled}>Submit</button>
      </form>
      <h2>{text}</h2>
      <h2 class ="animate-character">{text2}</h2>
     
      
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