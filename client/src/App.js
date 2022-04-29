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
import UserProfile from './pages/UserProfile';
import Profile from './components/Profile';
function App(){
   
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Login/>}/>
      <Route path = "CreateSession" element={<CreateSession />}/>
      <Route path = "App" element ={<App/>}/>
      <Route path = "Login" element ={<Login/>}/>
      <Route path = "Posts/:id" element ={<Posts currentUserID={"Annie"} />}/>
      <Route path = "Joinsession" element ={<JoinSession/>}/>
      <Route path="Archposts" element={<ArchPosts currentUserID={"Annie"}/>}/>
      <Route path="Home" element={<Home currentUserID={"Annie"}/>}/>
      <Route path="Sessions" element={<Sessions/>}/>
      <Route path="Courses" element={<Courses/>}/>
      <Route path="Signup" element={<Signup/>}/>
      <Route path="OurCalendar" element={<OurCalendar/>}/>
      <Route path="Settings" element={<UserProfile/>}/>
      <Route path="Profile" element={<Profile currentUserID={"Annie"}/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;






