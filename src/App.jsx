import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import MainFile from './Components/Student/MainFile'
import Programs from './Components/Programs/Programs'

function App() {
  return (
    <div>
      
      <Navbar />
      <MainFile />
      <div className='container'>
            <Programs/>
      </div>
      
    </div>
  )
}

export default App
