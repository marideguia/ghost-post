import React from "react"
import { useNavigate } from 'react-router-dom';
const Session = ({
    index,
    session
}) => {
  let navigate = useNavigate();
  const createdAt = new Date(session.createdAt).toLocaleDateString()
  const onClick = () => navigate(`/ArchPosts/${session.SessionID}`);
 
  return (
    <div className='s-cont'>
      {index % 2 === 0 ? 
        <div 
          className="session-2"
          onClick={onClick}
        >
          <div className="s-title" >{session.title}</div>
          <div className="s-created-at">{createdAt}</div>
        </div>
        :        
        <div 
          className="session"
          onClick={onClick}
        >
          <div className="s-title" >{session.title}</div>
          <div className="s-created-at">{createdAt}</div>
        </div>
      }      
    </div>    
    
  )
}

export default Session