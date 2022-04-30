import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';


const SessionSquare = ({
  
  index,
  session
}) => {
  let navigate = useNavigate();
  const onClick = () => {
    console.log(`session ${session.SessionID} clicked`)
    navigate(`/ArchPosts/${session.SessionID}`);
  }

  return (
    <div className='sq-cont'>
      <div className={index % 2 === 0 ? "sq-2" : "sq"} onClick={onClick}>
        <h3 className="sq-title" >{session.title}</h3>
        <div className="sq-students">Created {new Date (session.createdAt).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})} </div>
        {/*<div className="sq-students">{session.Students.length} students</div>*/}
      </div>
    </div>    
  )
}

export default SessionSquare