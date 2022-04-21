import React, {useState} from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import ArchPosts from './components/ArchPosts';
import Login from './pages/Login';
import Posts from './components/Posts';
import CreateSession from './pages/CreateSession';
import JoinSession from './pages/JoinSession';
import {Provider} from "react-redux";
import { createStore, applyMiddleware} from "redux";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import Home from './components/Home';
import Sessions from './components/Sessions';
import Courses from './components/Courses';
import Signup from './pages/Signup';
import OurCalendar from './pages/Calendar';

function App(){
  const [sessionTitle,setSessionTitle]= useState('Session Name');
   
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Login/>}/>
      <Route path = "CreateSession" element={<CreateSession setSessionTitle={setSessionTitle}/>}/>
      <Route path = "App" element ={<App/>}/>
      <Route path = "Login" element ={<Login/>}/>
      <Route path = "Posts" element ={<Posts currentUserID={"1"} sessionTitle= {sessionTitle} />}/>
      <Route path = "Joinsession" element ={<JoinSession/>}/>
      <Route path="Archposts" element={<ArchPosts currentUserID={"1"}/>}/>
      <Route path="Home" element={<Home/>}/>
      <Route path="Sessions" element={<Sessions/>}/>
      <Route path="Courses" element={<Courses/>}/>
      <Route path="Signup" element={<Signup/>}/>
      <Route path="OurCalendar" element={<OurCalendar/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;






