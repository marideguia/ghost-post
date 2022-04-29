import React from 'react'
import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar"
import { useState, useEffect } from "react";
import SideBar from './Sidebar'
import "./Home.css"
import Carousel from './Carousel'
import Header from './Header'
import Course from './Course';
import Image1 from './kevin-gonzalez-unsplash.jpg'
import Image2 from './william-moreland-unsplash.jpg'
import axios from "axios";
import {
  getCourses as getCoursesApi,
  getSessions as getSessionsApi,
} from "../api.js"
import SessionSquare from './SessionSquare';

const Home = ( {currentUserID} ) => {
  // const [userCourses, setUserCourses] = useState([]);

  // useEffect(() => {
  //   getCoursesApi().then(data => {
  //     setUserCourses(data)
  //   })    
  // }, [])

  // courses user is in: filter through user/courses table
  // const yourCourses = userCourses

  const [userSessions, setUserSessions] = useState([]);
  const [userName,setUserName]=useState("Unknown");

  let theArray = []
  useEffect(() => {
    setUserName(localStorage.getItem('UserName'));
    const data = {UserID:localStorage.getItem('UserID')}
    axios.post('http://localhost:3000/sessions/getUserSession',data).then((res)=>{ 
      setUserSessions(res.data) 
    });
    // getSessionsApi().then(data => {
    //   setUserSessions(data)
    //   setUserName(localStorage.getItem('UserName'));
    // })    
  }, [])

  const userID = String(currentUserID)
  let yourIndex = 0  
  
  const yourSessions = userSessions

  return (    
    <div className="column-cont">
      <SideBar />
      <div className="home-dash">  
        <Header title={`Hi ${userName}, What questions do you have today?`}/>



        {/* <Carousel /> */}

        <div className='h-cj-cont'>
          
          <div className='card'>
            <div className='left'>
              {/* <img src={Image1} alt='lecture audience'/> */}
            </div>
            <div className='h-j-cont'>            
              <p>Talk to your peers, ask important questions, and vote on the questions you want answered. Join a session now!</p>
              <Link to="../JoinSession">
                <button className="h-js-btn">
                  Join now
                </button>                  
              </Link>
            </div>
          </div>
          
          <div className='card'>
            <div className='left2'>
              {/* <img src={Image2} alt='classroom lecturer'/> */}
            </div>
            <div className='h-c-cont'>              
              <p>Want to connect with your audience? Need a better understanding of what they're learning? Create a session now!</p>
              <Link to="../CreateSession">
                  <button className="h-cs-btn">
                    Create now
                  </button>                  
                </Link>
            </div>
          </div>
          
          
        </div>

        <div className='h-courses-cont'>
          <h2>Your Sessions</h2>
            {/* <div className="course-list" >
              {yourCourses.map( (yourCourse) => (
                <Course
                  index={yourIndex+=1}
                  key={yourCourse.CourseID}
                  course={yourCourse}
                />
              ))}
            </div> */}
            
            { yourSessions ? 
              <div className="sq-list">
                { yourSessions.map( (yourSession) => (
                  <SessionSquare
                    index={yourIndex+=1}
                    key={yourSession.SessionID}
                    session={yourSession}
                  /> 
                ))}
              </div> 
              :
              <div className="no-sessions">
                <p>Looks like your sessions are empty.</p>
              </div>
            }
        </div>            
      </div>
      
      {/* <SearchBar/> */}
    </div>
  )
}

export default Home