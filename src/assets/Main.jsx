import React from 'react'
import First from './Components/First'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Skills from './Components/Skills'
import Resume from './Components/Resume'
import Education from './Components/Education'
import Bible from './Components/Bible'
import Experiences from './Components/Experiences'

function Main() {
  return (
    <>
        <Navbar></Navbar>
        <First></First>
        <About></About>
        <Education></Education>
        <Skills></Skills>
        <Resume></Resume>
        <Experiences></Experiences>
        <Bible></Bible>
    </>
    
  )
}

export default Main
