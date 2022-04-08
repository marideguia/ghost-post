import React from 'react'
import './Home.css'
import { RecentItems } from './RecentItems'

const Recents = () => {
  return (
    <div className='recents-sctn'>
        <h2>Recently Joined Courses</h2>
        <div className='recents'>
            {RecentItems.map((item, index) => { 
                return (
                    <div className='r-item'>
                        <h2>
                            {item.title}
                        </h2>
                        <p>
                            {item.students} Students
                        </p>                    
                    </div>
                )
            })}
            
        </div>
    </div>
  )
}

export default Recents