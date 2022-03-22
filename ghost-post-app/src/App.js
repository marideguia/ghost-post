import Header from './components/Header'
import Navbar from './components/Navbar'
import Posts from './components/Posts'
import PSearch from './components/PSearch'



const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <div className = "column-container">
          <Header title="Senior Capstone Session 1"/>
          <div className = "q-container">       
            <Posts />
            <PSearch />
          </div>
          
        </div>

      </div>     
    </div>
  );
}

export default App;
