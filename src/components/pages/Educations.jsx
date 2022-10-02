import React from 'react'
import front from '../../images/front.jpg'
import back from '../../images/back.jpg'
import full from '../../images/full.jpg'
import { NavLink } from 'react-router-dom'
import './style.css';


const Educations = () => {
  return (
    <div className='educationsContainer'>
      <h1>Our Educations</h1>
      <div className='educations'>
        <div className='card'>
          <h2>Front-end Developer Education</h2>
          <img src={front} alt="front-end" className='educationImg' />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, magni.</p>
          <div className='btnContainer'>
          <div className='btn' >
            <NavLink to="/educations" className="information">Start Learning</NavLink>
          </div>
        </div>
        </div>
        <div className='card'>
          <h2>Back-end Developer Education</h2>
          <img src={back} alt="back-end" className='educationImg'  />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, magni.</p>
          <div className='btnContainer'>
          <div className='btn' >
            <NavLink to="/educations" className="information">Start Learning</NavLink>
          </div>
        </div>
        </div>
        <div className='card'>
          <h2>Full Stack Developer Education</h2>
          <img src={full} alt="full-stack" className='educationImg'  />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, magni.</p>
          <div className='btnContainer'>
          <div className='btn' >
            <NavLink to="/educations" className="information">Start Learning</NavLink>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Educations