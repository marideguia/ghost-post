import { FaRegBell } from 'react-icons/fa'


const Header = ({title}) => {
  return (
    <header className="QsHeader">
      <h1>
        {title}
      </h1>
      <div className="bell">
        <FaRegBell onClick={() => console.log("notification bell clicked")} style={{cursor:'pointer'}} />
      </div>
    </header>
  )
}



export default Header