import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {

  const navigate = useNavigate();

  const handleAboutClick = ()=>{
    navigate("/dashboard")
  }

  return (
    <div>
      About Page
      <button onClick={handleAboutClick} >
        Move to Dashboard Page
      </button>
    </div>
  )
}

export default About
