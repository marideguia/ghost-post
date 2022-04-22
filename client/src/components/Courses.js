import React from 'react'
import { useState, useEffect } from "react";
import {
  getCourses as getCoursesApi,
} from "../api.js"
import Header from './Header'
import Sidebar from './Sidebar'
import SearchBar from './SearchBar.js';
import Course from './Course';
import CreateCourse from "./CreateCourse.js";
import JoinCourse from "./JoinCourse.js";
import './Home.css'

// https://github.com/Ziratsu/yt-react-tab

const Courses = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [userCourses, setUserCourses] = useState([]);

  const toggleTab = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    getCoursesApi().then(data => {
      setUserCourses(data)
    })    
  }, [])

  // indexing for course styles
  let yourIndex = 0
  let createIndex = 0

  // courses user is in: filter through user/courses table
  const yourCourses = userCourses
  // courses user has created: filter through creatorID's
  const createdCourses = userCourses

  return (
    <div className='c-col-container'> 
      <Sidebar />     
      <Header title="Your Courses"/>
      <div className="tabs-container">
        <div className="bloc-tabs">
          <button
            className={activeTab === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Your Courses
          </button>
          <button
            className={activeTab === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Created Courses
          </button>
          <button
            className={activeTab === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Join a Course
          </button>
          <button
            className={activeTab === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            Create A Course
          </button>
        </div>

        <div className="content-tabs">
          <div className={activeTab === 1 ? "content  active-content" : "content"}>
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

          <div  className={activeTab === 2 ? "content  active-content" : "content"}>
            <div className="course-list" >          
              {createdCourses.map( (createdCourse) => (
                <Course
                  index={createIndex+=1}
                  key={createdCourse.CourseID}
                  course={createdCourse}
                />      
                // console.log("course created: ", createdCourse)        
              ))}
            </div> 
          </div>

          <div className={activeTab === 3 ? "content  active-content" : "content"}>
            <JoinCourse/>
          </div>
          <div className={activeTab === 4 ? "content  active-content" : "content"}>
            <CreateCourse/>
          </div>
        </div>
    </div>
      
      {/* <SearchBar /> */}
    </div>
  )
}

export default Courses