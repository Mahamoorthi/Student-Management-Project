import React from 'react'
import './Navbar.css'
import education from '/src/assets/education.png'

function navbar() {
  return (
    <div>
      <nav className='container'>
        <img src={education} alt=""  className='img'/><h1 className='head'>Education</h1>
        <ul>
            <li>home</li>
            <li>Program</li>
            <li>About</li>
            <li>Compus</li>
            <li>Testimonials</li>
            <li><button className='btn'>Contact us</button></li>
        </ul>
      </nav>
    </div>
  )
}

export default navbar
