
const Session = ({
    index,
    session
}) => {

  const createdAt = new Date(session.CreatedAt).toLocaleDateString()
  const onClick = () => console.log(`session ${session.SessionID} clicked`)

  return (
    <div className='s-cont'>
      {index % 2 === 0 ? 
        <div 
          className="session-2"
          onClick={onClick}
        >
          <div className="s-title" >{session.Title}</div>
          <div className="s-created-at">{createdAt}</div>
        </div>
        :        
        <div 
          className="session"
          onClick={onClick}
        >
          <div className="s-title" >{session.Title}</div>
          <div className="s-created-at">{createdAt}</div>
        </div>
      }      
    </div>    
    
  )
}

export default Session