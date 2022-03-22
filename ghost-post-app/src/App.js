import Header from './components/Header'
import Navbar from './components/Navbar'
import Comment from './components/Comment'
import Questions from './components/Questions'
import QSearch from './components/QSearch'



const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <div className = "column-container">
          <Header title="Senior Capstone Session 1"/>
          <div className = "q-container">       
            <Questions />
            <QSearch />
          </div>
          
        </div>

      </div>     
    </div>
  );
}

export default App;
