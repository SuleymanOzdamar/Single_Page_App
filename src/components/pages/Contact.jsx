import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css';

const Contact = () => {
  return (
    <div className='contactContainer'>
      <h1>Contact Us</h1>
      <form className='contact'>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder='Enter your name' />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Enter your email' />
        </div>
        <div>
          <label htmlFor="mobile">Mobile</label>
          <input type="tel" placeholder='Enter your mobile' />
        </div>
        <div>
          <label htmlFor="textarea">Message</label>
          <textarea placeholder='Enter your message' />
        </div>
        <div className='btnContainer'>
          <div className='btn btnContact' >
            <NavLink to="/contact" className="information">Send</NavLink>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contact