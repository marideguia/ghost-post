import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Login from './Login'
import Car from './components/CreateSession'
import Joinsession from './joinsession'
import Posts from './components/Posts'
import ArchPosts from './components/ArchPosts'
import Error from'./components/Error'

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Optional Navbar */}
      <Routes>  
        {/* root page */}
        <Route path="/" element={<Login />} />
        <Route path="/Car" element={<Car />} />
        <Route path="/joinsession" element={<Joinsession />} />
        <Route path="/posts" element={<Posts currentUserID="1"/>} />
        <Route path="/archposts" element={<ArchPosts />} />
        {/* Render error page when invalid address is used */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
