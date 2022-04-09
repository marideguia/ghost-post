import React from 'react'
import PSearch from './PSearch'
import SideBar from './Sidebar'
import "./Home.css"
import Carousel from './Carousel'
import Recents from './Recents'
import Header from './Header'

const Home = () => {
  return (    
    <div className="column-cont">
      <SideBar />
      <div className="home-dash">
        <div className="home-header">
          <h2 className="greeting">Hi Summer,</h2>
          <h1>What questions do you have today?</h1>
        </div>
        <div className="carousel-cont">
          <Carousel />
        </div>
        <div className="recents-cont">
          <Recents/>
        </div>
      </div>
      {/* <PSearch/> */}
    </div>
  )
}

export default Home