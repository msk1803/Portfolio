import React from 'react'
import './Footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
     

     <ul className='permalinks'>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
     </ul>
     <div className="footer__socials">
      <a href="https://facebook.com" target="__blank"><AiFillFacebook/></a>
      <a href="https://instagram.com" target="__blank"><AiOutlineInstagram/></a>
      <a href="https://twitter.com" target="__blank"><BsTwitter/></a>
     </div>
    
    </footer>

  )
}

export default Footer
