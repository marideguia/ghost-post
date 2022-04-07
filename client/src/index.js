import React from "react";
import App from "./App";
import ReactDOM from 'react-dom';
import "./index.css";

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import ArchPosts from './components/ArchPosts';
import Login from './pages/Login';
import Posts from './components/Posts';
import CreateSession from './pages/CreateSession';
import reportWebVitals from './reportWebVitals';
import JoinSession from './pages/JoinSession';
import Home from './components/Home'
import Courses from './components/Courses.js'
import Sessions from './components/Sessions.js'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Login/>}/>
      <Route path = "CreateSession" element={<CreateSession/>}/>
      <Route path = "App" element ={<App/>}/>
      <Route path = "Login" element ={<Login/>}/>
      <Route path = "Posts" element ={<Posts currentUserID={"1"}/>}/>
      <Route path = "Joinsession" element ={<JoinSession/>}/>
      <Route path="Archposts" element={<ArchPosts/>}/>
      <Route path="Home" element={<Home/>}/>
      <Route path="Courses" element={<Courses/>}/>
      <Route path="Sessions" element={<Sessions/>}/>

    </Routes>
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
