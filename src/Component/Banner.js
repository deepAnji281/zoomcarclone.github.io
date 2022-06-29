import React from 'react'
import './Banner.css'

function Banner() {
  return (
  <div className='banner'>
    <div className='banner-card'>
        <img src='Pictures/car.jpg'/>
       <div className='heading'>
       <h1>ZoomCar Clone App <br/> Developement Company</h1>
        <h3>Lorem ipsum dolor sit amet consceture</h3>
        <p> Lorem ipsum dolor sit amet consceture, adipisicing elite animi hic
        magni id saepe partiour sed minus sucipit valid</p>
        <a href='https://www.omninos.in/contact.php'><button>Buy Now ZoomCar Clone App</button></a>
       </div>
    </div>
  </div>
  )
}

export default Banner