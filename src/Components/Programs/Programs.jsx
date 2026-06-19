import React from 'react'
import './Programs.css'

import OIP from '/src/assets/OIP.jpg'
import student from '/src/assets/student.jpg'
import photodune from '/src/assets/photodune.jpg'

import medalalt from '/src/assets/medalalt.png'
import education from '/src/assets/education.png'
import reading from '/src/assets/reading.png'



function Programs() {
  return (
    <div className='programs'>
        <div className='programs'>
             <img src={OIP} alt="" height="300px" width="220px" className="img1"/>
             <div className='caption'>
                <img src={reading} alt="" />
                <p className='para'>Post Graduation</p>
             </div>
        </div>
        <div className='programs'>
             <img src={student} alt=""  height="300px" width="220px" className="img1"/>
             <div className='caption'>
                <img src={medalalt} alt="" />
                <p className='para'>Graduation Degree</p>
             </div>
        </div>
        <div className='programs'>
             <img src={photodune} alt=""  height="300px" width="220px" className="img1"/>
             <div className='caption'>
                <img src={education} alt="" />
                <p className='para'>Graduation Degree</p>
             </div>
        </div>
    </div>
  )
}

export default Programs
