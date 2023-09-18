import React, { useState } from 'react'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import './Slider.css'
const Slider = () => {
     const [currentSlide,setCurrentSlide]=useState(0);

    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        // "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
     "https://images.pexels.com/photos/18131916/pexels-photo-18131916/free-photo-of-city-fashion-man-people.jpeg?auto=compress&cs=tinysrgb&w=1600",];
    
    const prevSlide=()=>{
      setCurrentSlide(currentSlide===0?data.length-1:currentSlide-1)
    }
    const nextSlide=()=>{
      setCurrentSlide(currentSlide===data.length-1?0:currentSlide+1)
    }

  return (
    <div className="slider">
      <div className="slider-container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
       
      </div>
      <div className="slider-icons">
        <div className="s-icon" onClick={prevSlide}>
          <AiOutlineArrowLeft />
        </div>
        <div className="s-icon" onClick={nextSlide}>
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  )
}

export default Slider