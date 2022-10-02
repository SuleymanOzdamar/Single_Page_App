import React from 'react'
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import './style.css';

const Footer = () => {
  return (
    <div>
      <footer>
        <div className='container container-flex'>
          <div className='icons'>
            <FaFacebook className='icon' />
            <FaInstagram className='icon' />
            <FaTwitter className='icon' />
            <FaLinkedin className='icon' />
            <FaGithub className='icon' />
          </div>
          <div className='line'>
            <hr />
            <hr />
          </div>
          <div className='cr'>
            <p>All rights reserved &copy;</p>
            <p>Made with Süleyman Özdamar</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer