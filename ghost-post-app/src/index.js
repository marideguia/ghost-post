import React from "react";
import App from "./App";
import Joinsession from './joinsession';
import ReactDOM from 'react-dom';
import "./index.css";
import ArchPosts from './components/ArchPosts';
import {BrowserRouter, Routes, Route,Link} from 'react-router-dom';
import Login from './components/Login';
import Posts from './components/Posts';
import CreateSession from './components/CreateSession';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Login/>}/>
      <Route path = "CreateSession" element={<CreateSession/>}/>
      <Route path = "App" element ={<App/>}/>
      <Route path = "Login" element ={<Login/>}/>
      <Route path = "Posts" element ={<Posts currentUserID={"1"}/>}/>
      <Route path = "Joinsession" element ={<Joinsession/>}/>
      <Route path="Archposts" element={<ArchPosts/>}/>
    </Routes>
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
