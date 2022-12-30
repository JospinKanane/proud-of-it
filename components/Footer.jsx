import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo_footer from '../public/logo.jpg'
import Social from './Social'
import Rfooter from './Rfooter'

const Footer = () => {
  return (
    <div className="footer flex flex-col bg-black text-white w-full absolute bottom-0 pt-5">
      <div className='footer-main flex flex-rows justify-evenly'>
          <div className='footer-social flex flex-row justify-center items-center'>
            <Link href='/'>
              <Image src={logo_footer} alt='logo footer' className='logo_footer cursor-pointer mb-2 mr-3'/>
            </Link>
            <Social />
          </div>
          <ul className='ulFooter flex flex-rows gap-10 justify-end items-center font-bolt'>
            <Link href='/'>
              <li className='hover:text-red-600 cursor-pointer'>Home</li>
            </Link>
            <Link href='/about'>
              <li className='hover:text-red-600 cursor-pointer'>About</li>
            </Link>
            <Link href='/contact'>
              <li className='hover:text-red-600 cursor-pointer'>Contact</li>
            </Link>
            <Link href='/adresse'>
              <li className='hover:text-red-600 cursor-pointer'>Adresse</li>
            </Link>
            <Link href='/vacacies'>
              <li className='hover:text-red-600 cursor-pointer'>Jobs</li>
            </Link>
          </ul>
      </div>
      <Rfooter />
      </div>
  )
}

export default Footer