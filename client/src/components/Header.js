import { FaRegBell } from 'react-icons/fa'

// Session header
const Header = ({title}) => {
  return (    
    <div className="sHeader">
      <h1 className="page-title">{title}</h1>

      {/* Notifications */}
      {/* <div className="bell">
        <FaRegBell onClick={() => console.log("notification bell clicked")} style={{cursor:'pointer'}} />
      </div> */}
      
    </div>
  )
}

export default Header