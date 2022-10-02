import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import photo from '../../images/photo.png'
import { FaUser } from "react-icons/fa";
import './style.css';

const Header = () => {
  return (
    <header>
        <div className='container container-flex'>
            <div className='logoContainer'>
                <img src={photo} alt="" className='logo' />
            </div>
            <nav>
                <div className='list'>
                    <NavLink to="/" className="listItem" >Home</NavLink>
                    <NavLink to="/about" className="listItem" >About</NavLink>
                    <NavLink to="/educations" className="listItem" >Educations</NavLink>
                    <NavLink to="/contact" className="listItem" >Contact</NavLink>
                    <NavLink to="/policy" className="listItem" >Policy</NavLink>
                </div>
                
            </nav>
            <div className='icon'>
                <Link className='iconLink' to='/login'> <FaUser /> </Link>
            </div>
        </div>
    </header>
  )
}

export default Header