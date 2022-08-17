import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/shubham-kumar-6292a6211/"  target="__blank"><BsLinkedin/></a>
        <a href="https://github.com/msk1803" target="__blank"><BsGithub/></a>
       
    </div>
  )
}

export default HeaderSocials