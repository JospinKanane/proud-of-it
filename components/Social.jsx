import React from 'react'
import {FaFacebook, FaTwitterSquare, FaInstagram, FaLinkedin, FaYoutube}  from 'react-icons/fa'

function Social() {
  return (
      <div className='social-icons flex flex-row justify-center items-center'>
              <a href='https://facebook.com'>
                <FaFacebook className='icone hover:text-red-900 cursor-pointer'/>
              </a>
              <a href='https://twitter.com'>
                <FaTwitterSquare className='icone hover:text-red-900 cursor-pointer'/>
              </a>
              <a href='https://instagram.com'>
                <FaInstagram className='icone hover:text-red-900 cursor-pointer'/>
              </a>
              <a href='https://linkedin.com'>
                <FaLinkedin className='icone hover:text-red-900 cursor-pointer'/>
              </a>
              <a href='htttps://youtube.com'>
                <FaYoutube className='icone hover:text-red-900 cursor-pointer'/>
              </a>
      </div>
  )
}

export default Social