import React from "react";
import { useState, useEffect } from "react";
import {
  getSessions as getSessionsApi,
} from "../api.js"
import "./Home.css"
import Header from "./Header"
import Session from "./Session"
import JoinSession2 from "./JoinSession2"
import CreateSession2 from "./CreateSession2"
import Sidebar from "./Sidebar"
// https://github.com/Ziratsu/yt-react-tabs

const Sessions = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [userSessions, setUserSessions] = useState([]);

  const toggleTab = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    getSessionsApi().then(data => {
      setUserSessions(data)
    })    
  }, [])

  let yourIndex = 0
  let createIndex = 0
  // courses user is in. how to filter correct sessions?
  const yourSessions = userSessions
  // courses user has created. how to filter correct sessions?
  const createdSessions = userSessions.filter((userSession) => userSession.CreatorID === "1")

  return (
    <div className='s-col-container'> 
      {/* <Sidebar />      */}
      <Header title="Sessions"/>
      <div className="tabs-container">
        <div className="bloc-tabs">
          <button
            className={activeTab === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Your Sessions
          </button>

          <button
            className={activeTab === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Created Sessions
          </button>

          <button
            className={activeTab === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Join a Session
          </button>

          <button
            className={activeTab === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            Create A Session
          </button>
        </div>

        <div className="content-tabs">
          <div className={activeTab === 1 ? "content  active-content" : "content"}>
            <div className="session-list" >
              {yourSessions.map( (yourSession) => (
                <Session
                  index={yourIndex+=1}
                  key={yourSession.SessionID}
                  session={yourSession}
                />
                // console.log("course: ", yourCourse.Title, yourCourse.CourseID)
              ))}
            </div>     
          </div>

          <div className={activeTab === 2 ? "content  active-content" : "content"}>
            <div className="session-list" >
              {createdSessions.map( (createdSession) => (
                <Session
                  index={createIndex+=1}
                  key={createdSession.SessionID}
                  session={createdSession}
                />
                // console.log("course: ", yourCourse.Title, yourCourse.CourseID)
              ))}
            </div>              
          </div>

          <div className={activeTab === 3 ? "content  active-content" : "content"}>
            
            <JoinSession2/>

          </div>

          <div className={activeTab === 4 ? "content  active-content" : "content"}>
           <CreateSession2/>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Sessions