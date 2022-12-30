import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo_footer from '../../public/logo.jpg'
import {FaFacebook, FaTwitterSquare, FaInstagram, FaLinkedin, FaYoutube}  from 'react-icons/fa'
import Social from '../../components/Social'


function dashboard() {
  return (
    <div className="flex flex-col items-center">
      <header className="flex flex-row items-center justify-between bg-black text-white w-full">
          <Link href='/auth-7Empire-admin/dashboard'>
            <Image src={logo_footer} alt='logo' className='md:w-50 cursor-pointer h-10 w-10 m-2' />
          </Link>
          <h1 className="font-bold text-4xl cursor-default">Dashboard</h1>
          <div className=' flex flex-row justify-center items-center gap-2 mr-6'>
            <Social/>
          </div>
      </header>
      <div className="flex flex-row justify-between w-full">
        <div className="m-9 ml-60">
          <form>
            <div className="mb-2">
              <label className="block text-gray-700 font-bold mb-2 text-2xl" for="tittle">
                Tittle
              </label>
              <textarea className="shadow border rounded py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline w-96 h-16 resize-none overflow-auto" id="tittle" type="text" placeholder="Article tittle here" name="tittle"/>
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 font-bold mb-2 text-2xl" for="attack">
                Attack
              </label>
              <textarea className="shadow border rounded py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline w-96 h-24 resize-none overflow-auto" type="text" placeholder="Article attack here" name="attack" id="attack"/>
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 font-bold mb-2 text-2xl" for="body" >
                Body
              </label>
              <textarea className="shadow border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline w-96 h-44 resize-none overflow-auto" placeholder="Article body here" name="body" id="body" />
            </div>
          </form>
        </div>
        <div className="flex flex-col gap-2 m-9 mr-60">
          <div className="w-96 h-32">
            <h1 className="block text-gray-700 font-bold mb-2 text-2xl cursor-default">Featured Image</h1>
          </div>
          <div className="w-96 h-20">
            <h1 className="block text-gray-700 font-bold mb-2 text-2xl cursor-default">Categories</h1>
            <select className="flex flex-row gap-1 shadow border rounded text-gray-700 h-9 w-96 pl-3">
              <option value="cat" name="category">Cat</option>
              <option value="cat-1">Cat-1</option>
              <option value="cat-2">Cat-2</option>
            </select>
          </div>
          <div className="w-96 h-48">
            <h1 className="block text-gray-700 font-bold mb-2 text-2xl cursor-default">Tags</h1>
            <div className="flex flex-row gap-1 shadow border rounded text-gray-700 overflow-auto h-40 pl-3">
                <label className="flex flex-row items-baseline gap-1" for="tags" >
                  <input type="checkbox" className="mr-1 h-4 w-4 shadow border rounded" name="tags" id="tags" />
                  <span className="text-xl">tag_1</span>
                </label>
            </div>
          </div>
          <div>
            <button className="bg-black hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5" type="button">
              Publish
            </button>
          </div>
        </div>
      </div>
      <footer className="text-center text-gray-500 text-xs absolute bottom-3">
          &copy;2023 7-Empire. All rights reserved. Powered by Geek-Empire
      </footer>
    </div>
  )
}

export default dashboard