import React from 'react';
import { useEffect, useState } from "react"
import RandomCode from './RandomCode';
import Posts from './Posts';
import {BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import 'tachyons';
import './CreateSession.css'

function CreateSession() {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [show, setShow] = useState(false);
  

  var add = ''
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  for (var x =0;x<5;x++){
    add += characters.charAt(Math.floor(Math.random()*characters.length))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setText(event.target[0].value);
    setText2("Your session code is " + add);
    setText3("Share this code with your audience")
    setShow(true);

  };


  return (
    //bg-light-blue br3 pa3 ma2 grow bw2 shadow-5 f4 fw6 db black link hover-dark-blue
    //bg-light-blue dib br3 pa3 ma2 bw2 shadow-5 dtc v-mid tc black ph3 ph4-l
    //bg-light-blue br3 pa3 ma2 bw2 shadow-5 f4 fw6 db black link  dtc v-mid tc black ph3 ph4-l
    //bw2 shadow-5 f4 fw6 db
    //"bg-light-blue dib br3 pa6"
     <div className = "center vh-50 dt w-50 bg-light-blue br3 mt6" >
       <div class="dtc v-mid tc black ph3 ph4-l">
    <h1>Ghost Post Session Generator</h1>
    <h3>Enter title of your session below</h3>
    
    <div>
    <form onSubmit={handleSubmit}>
        <input className='pa2 ba b--dark-gray ma2' type="text" />
        <button className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib black' type="submit">Submit</button>
      </form>
      <h2>{text}</h2>
      <h2 className='dark-blue'>{text2}</h2>
      <h3>{text3}</h3>
      
    </div>
    <div>
    {
    show?<h3 className = "grow"><Link to="/App">Go to session</Link></h3>:null
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