import React, {useState} from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom';
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
import RandomCode from "./components/RandomCode";
import UserProfile from './pages/UserProfile';
import Protected from "./Protected";
import PublicRoutes from "./PublicRoutes";
import Profile from './components/Profile';
function App(){
  //const [loggedIn, setValue] = React.useState();
 // let currentUserID = localStorage.getItem('UserID')
  //var loggedIn;

  //function handleChange(newValue) {
  
   
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Protected/>}>
        <Route path = "CreateSession" element={<CreateSession/> }/>
        <Route path="Login" element={<Login/>}/>
        <Route path="Signup" element={<Signup/>}/>
        <Route path = "App" element ={<RandomCode/>}/>
        <Route path = "Posts/:id" element ={<Posts currentUserID={"1"}/>}/>
        <Route path = "Joinsession" element ={<JoinSession/>}/>
        <Route path="Archposts/:id" element={<ArchPosts currentUserID={"1"}/>}/>
        <Route path="Home" element={<Home currentUserID={"1"}/> }/>
        <Route path="Sessions" element={<Sessions/> }/>
        <Route path="Courses" element={<Courses/>}/>
        <Route path="OurCalendar" element={<OurCalendar/>}/>
        <Route path="Profile" element={<Profile currentUserID={"Annie"}/>}/>
      </Route>

      <Route path="Login" element={<PublicRoutes/>}>
          <Route path="/Login" element={<Login/>}/> 
      </Route>

      <Route path="Signup" element={<PublicRoutes/>}>
          <Route path="/Signup" element={<Signup/>}/> 
      </Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;






