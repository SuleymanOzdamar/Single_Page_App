import React from 'react'
import './style.css';
import { NavLink } from 'react-router-dom';
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
import info from "../../images/info.png"

const About = () => {
  return (
    <div className='mainSection'>
      <div className='contentBox'>
        <h1>About of Programs</h1>
        <p className='lis'>
            <h3> HTML <FaHtml5 className='fcon' size={20} /> </h3>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sit blanditiis, dolore ullam sapiente esse odit iusto eligendi quisquam debitis!</h6>
            <h3> CSS <FaCss3 className='fcon' size={17} /> </h3>
            <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, pariatur molestiae inventore quibusdam molestias culpa error harum possimus nemo unde.</h6>
            <h3> JAVA <FaJava className='fcon' size={20} /> </h3>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium debitis dicta animi officiis quo enim incidunt ducimus iusto quam odit?</h6>
            <h3> JAVASCRİPT <DiJavascript1 className='fcon' size={20} /> </h3>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos beatae obcaecati voluptatem aliquam nemo illo rem mollitia ex quam deserunt!</h6>
            <h3> REACTJS <FaReact className='fcon' size={20} /> </h3>
            <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, sit tempora! Sapiente iste quos ad nam placeat expedita exercitationem. Aspernatur?</h6>
            <h3> BOOTSTRAP <FaBootstrap className='fcon' size={20} /> </h3>
            <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus hic non perspiciatis nam? Tempore voluptates quidem nemo aliquam, dignissimos officiis.</h6>
            <h3> PYTHON <DiPython className='fcon' size={20} /> </h3>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ex sint exercitationem culpa facilis vero quibusdam impedit aliquid deserunt at.</h6>
            <h3> DJANGO <DiDjango className='fcon' size={20} /> </h3>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, eius quam. Doloribus nostrum quod necessitatibus? Voluptates obcaecati quam quis? Possimus!</h6>
            <h3> REACT NATİVE <FaReact className='fcon' size={20} /> </h3>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tenetur eum enim dolores possimus unde debitis cum totam dignissimos soluta.</h6>
            <h3> DART <SiDart className='fcon' size={17} /> </h3>
            <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia velit quod iure blanditiis quis obcaecati sed ex necessitatibus voluptatem fuga!</h6>
            <h3> FLUTTER <RiFlutterFill className='fcon' size={20} /> </h3>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi esse id eos assumenda sed quaerat quis tempore quos impedit magnam.</h6>
        </p>
        <div className='btnContainer'>
          <div className='btn' >
            <NavLink to="/about" className="information">Get Information</NavLink>
          </div>
        </div>
      </div>
      <div className='imgContainer'>
        <img src={info} alt="home" className='homeImg' />
      </div>
    </div>
  )
}

export default About