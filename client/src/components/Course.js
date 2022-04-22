import React from 'react'
import './Home.css'

const Course = ({
  index,
  course
}) => {
  const onClick = () => {
    console.log(`course ${course.CourseID} clicked`)
  }

  return (
    <div className='c-cont'>
      {index % 2 === 0 ? 
      <div className="course-2" onClick={onClick}>
        <h3 className="c-title" >{course.Title}</h3>
        <div className="c-students">{course.Students.length} students</div>
      </div>
      :
      <div className="course" onClick={onClick}>
        <h3 className="c-title" >{course.Title}</h3>
        <div className="c-students">{course.Students.length} students</div>
      </div>
      }
    </div>
    
  )
}

export default Course