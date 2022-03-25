import React from 'react';
import { useEffect, useState } from "react"
// import RandomCode from './RandomCode';
import Posts from './Posts';
import {BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import 'tachyons';

function Car() {
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
    <>
     <div className = "bg-light-blue br3 pa3 ma2 bw2 shadow-5 f4 fw6 db black link hover-dark-blue dtc v-mid tc black ph3 ph4-l">
    <h3>Enter title of your session below</h3>
    
    <div>
    <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
      <h1>{text}</h1>
      <h2 className='shadow-5'>{text2}</h2>
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
  </>
 
  );
}

  export default Car;