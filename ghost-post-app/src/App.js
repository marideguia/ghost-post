

// import Login from './components/Login'
// import Car from './components/CreateSession'
// import Joinsession from './joinsession'
// import Posts from './components/Posts'
// import ArchPosts from './components/ArchPosts'
// import Error from'./components/Error'

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {React, useEffect, useState } from "react" //necessary react components

const App = () => {

  const [title, setTitleVal] = useState("title");
  
 /* loadSession = (data) => {
    //event.preventDefault();
    setTitleVal(data.title);
   
  };*/


  return (
    <div><h1>{title}</h1></div>
  );
}

export default App;






