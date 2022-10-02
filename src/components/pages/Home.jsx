import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiDjango } from "react-icons/di";
import { RiFlutterFill } from "react-icons/ri";
import { SiDart } from "react-icons/si";
import { FcCheckmark } from "react-icons/fc";
import { NavLink } from 'react-router-dom';
import home from "../../images/home.png"
import './style.css';

const Home = () => {
  return (
    <div className='mainSection'>
      <div className='contentBox'>
        <h1>Learn Programing</h1>
        <p>
          <ul className='lis'>
            <li> <FcCheckmark /> HTML <FaHtml5 className='fcon' size={20} /> </li>
            <li> <FcCheckmark /> CSS <FaCss3 className='fcon' size={17} /> </li>
            <li> <FcCheckmark /> JAVA <FaJava className='fcon' size={20} /> </li>
            <li> <FcCheckmark /> JAVASCRİPT <DiJavascript1 className='fcon' size={20} /> </li>
            <li> <FcCheckmark /> REACTJS <FaReact className='fcon' size={20} /> </li>
            <li> <FcCheckmark /> BOOTSTRAP <FaBootstrap className='fcon' size={20} /> </li>
            <li> <FcCheckmark /> PYTHON <DiPython className='fcon' size={20} /> </li>
            <li> <FcCheckmark /> DJANGO <DiDjango className='fcon' size={20} /> </li>
            <li> <FcCheckmark /> REACT NATİVE <FaReact className='fcon' size={20} /> </li>
            <li> <FcCheckmark /> DART <SiDart className='fcon' size={17} /> </li>
            <li> <FcCheckmark /> FLUTTER <RiFlutterFill className='fcon' size={20} /> </li>
          </ul>
        </p>
        <div className='btnContainer'>
          <div className='btn' >
            <NavLink to="/about" className="information">Get Information</NavLink>
          </div>
        </div>
      </div>
      <div className='imgContainer'>
        <img src={home} alt="home" className='homeImg' />
      </div>
    </div>
  )
}

export default Home