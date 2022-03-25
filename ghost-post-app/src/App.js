

import Login from './Login'
import Car from './components/CreateSession'
import Joinsession from './joinsession'
import Posts from './components/Posts'
import ArchPosts from './components/ArchPosts'
import Error from'./components/Error'

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      {/* Optional Navbar */}
      <Routes>  
          {/* root page */}
        <Route path="/" element={<Login />} />
        <Route path="/createsession" element={<Car />}/>
        <Route path="/joinsession" element={<Joinsession />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/archposts" element={<ArchPosts />} />
        {/* Render error page when invalid address is used */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
