import { FaRegBell } from 'react-icons/fa'

const Header = ({title}) => {
  return (
    // Session header
    <header className="sHeader">
      {/* Session title */}
      <h1>{title}</h1>

      {/* Notifications */}
      <div className="bell">
        <FaRegBell onClick={() => console.log("notification bell clicked")} style={{cursor:'pointer'}} />
      </div>
      
    </header>
  )
}



export default Header