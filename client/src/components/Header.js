import { FaRegBell } from 'react-icons/fa'

// Session header
const Header = ({title}) => {
  return (    
    <header className="sHeader">
      <h2 className="page-header">{title}</h2>

      {/* Notifications */}
      <div className="bell">
        <FaRegBell onClick={() => console.log("notification bell clicked")} style={{cursor:'pointer'}} />
      </div>
      
    </header>
  )
}

export default Header