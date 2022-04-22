import React from 'react'
import SearchBar from "./SearchBar"
import { useState, useEffect } from "react";
import SideBar from './Sidebar'
import "./Home.css"
import Carousel from './Carousel'
import Header from './Header'
import Course from './Course';

import {
  getCourses as getCoursesApi,
} from "../api.js"

const Home = ( {currentUserID} ) => {
  const [userCourses, setUserCourses] = useState([]);

  useEffect(() => {
    getCoursesApi().then(data => {
      setUserCourses(data)
    })    
  }, [])

  const userID = String(currentUserID)
  let yourIndex = 0
  // courses user is in: filter through user/courses table
  // const yourCourses = userCourses

  return (    
    <div className="column-cont">
      <SideBar />
      <div className="home-dash">  
        <Header title={`Hi ${userID}, What questions do you have today?`}/>
        <Carousel />

        <div className='h-courses-cont'>
          <h2 className='h-c-title'>Your Courses</h2>
            <div className="course-list" >
              {yourCourses.map( (yourCourse) => (
                <Course
                  index={yourIndex+=1}
                  key={yourCourse.CourseID}
                  course={yourCourse}
                />
                // console.log("course: ", yourCourse.Title, yourCourse.CourseID)
              ))}
            </div>
        </div>     
      </div>
      
      {/* <SearchBar/> */}
    </div>
  )
}

export default Home