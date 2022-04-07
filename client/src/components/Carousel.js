import React, {useState} from 'react'
import { CarouselItems } from './CarouselItems';
import './Home.css'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const Carousel = () => {
    const [current, setCurrent] = useState(0);
    // if(!Array.isArray())
    const length = CarouselItems.length
    const nextSlide = () => {
        setCurrent(current === length-1 ? 0 : current+1 )
        console.log(current)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length-1 : current-1 )
        console.log(current)
    }

    // if array is invalid or empty, do not display
    if(!Array.isArray(CarouselItems) || CarouselItems.length <= 0) {
        return null
    }

  return (
      <div className="carousel">
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        {CarouselItems.map((item, index) => { 
            return (
                <div className={index === current ? 'item-active' : 'item' } key={index}>
                    {index === current && (
                        <div className='item-body'>
                            <h2>
                                {item.title}
                            </h2>
                            <p>
                                {item.text}
                            </p>
                            <button className='carousel-btn'>
                                {item.button_text}
                            </button>
                        </div>
                    )}                    
                </div>
            )
        })}
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />

      </div>

  )
}

export default Carousel