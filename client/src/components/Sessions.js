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
import SearchBar from "./SearchBar"
import axios from "axios";
// https://github.com/Ziratsu/yt-react-tabs
// https://www.youtube.com/watch?v=mZvKPtH9Fzo

const Sessions = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [userSessions, setUserSessions] = useState([]);
  const [creatorSessions, setCreatorSessions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const [searchTerm2, setSearchTerm2] = useState('')

  const toggleTab = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    const data = {UserID:localStorage.getItem('UserID')}
    axios.post('http://localhost:3000/sessions/getUserSession',data).then((res)=>{ 
      setUserSessions(res.data) 
    });
    axios.post('http://localhost:3000/sessions/getCreatorSession',data).then((res)=>{ 
      setCreatorSessions(res.data) 
    });
  }, [])

  let yourIndex = 0
  let createIndex = 0
  // courses user is in. how to filter correct sessions?
  const yourSessions = userSessions
  // courses user has created. how to filter correct sessions?
  const createdSessions = creatorSessions
 
  return (
    <div className='s-col-container'> 
      <Sidebar />  
      <div className="s-dash">         
        <Header title="Sessions"/>
        <div className="tabs-container">
          <div className="bloc-tabs">
            <button
              className={activeTab === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              Joined Sessions
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
              Join Session
            </button>

            <button
              className={activeTab === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(4)}
            >
              Create Session
            </button>
          </div>

          <div className="content-tabs">
            <div className={activeTab === 1 ? "content  active-content" : "content"}>
              <div className="s-tabs">
                <input className="s-search" type="searchText" placeholder="Search Sessions" onChange={event => {setSearchTerm(event.target.value)}}/>
                <div className="session-list" >
                  {yourSessions.filter( (yourSession) => {
                    if (searchTerm === "") {
                      return yourSession
                    } else if (yourSession.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                      return yourSession
                    }
                  }).map( (yourSession) => (
                    <Session
                      index={yourIndex+=1}
                      key={yourSession.SessionID}
                      session={yourSession}
                    />
                    ))}
                </div>
              </div>     
            </div>

            <div className={activeTab === 2 ? "content  active-content" : "content"}>
              <div className="s-tabs">
                <input className="s-search" type="searchText" placeholder="Search Sessions" onChange={event => {setSearchTerm2(event.target.value)}}/>
                <div className="session-list" >
                  {createdSessions.filter( (createdSession) => {
                    if (searchTerm2 === "") {
                      return createdSession
                    } else if (createdSession.title.toLowerCase().includes(searchTerm2.toLowerCase())) {
                      return createdSession
                    }
                  }).map( (createdSession) => (
                    <Session
                      index={createIndex+=1}
                      key={createdSession.SessionID}
                      session={createdSession}
                    />
                    ))}
                </div>
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
        <div className="fill">

        </div>
      </div>

      {/* <SearchBar /> */}

    </div>
  )
}

export default Sessions