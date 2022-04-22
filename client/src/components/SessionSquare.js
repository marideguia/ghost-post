import React from 'react'
import './Home.css'

const SessionSquare = ({
  index,
  session
}) => {
  const onClick = () => {
    console.log(`session ${session.SessionID} clicked`)
  }

  return (
    <div className='sq-cont'>
      <div className={index % 2 === 0 ? "sq-2" : "sq"} onClick={onClick}>
        <h3 className="sq-title" >{session.Title}</h3>
        <div className="sq-students">{session.Students.length} students</div>
      </div>
    </div>    
  )
}

export default SessionSquare