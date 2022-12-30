import React from 'react'
import Link from 'next/link'

function index() {
  return (
    <div className="login flex flex-col items-center justify-center content-center mt-20 ">
      <h1 className="text-center font-bold text-4xl	mb-4">Login</h1>
      <div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="usermail">
              Usermail
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="usermail" type="text" placeholder="Usermail"/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
            <p className="text-red-500 text-xs italic"></p>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-black hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Login
            </button>
            <span className="cursor-default">or</span>
            <Link href="/auth-7Empire-admin/signup">
              <button className="bg-red-900 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Signup
              </button>
            </Link>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs absolute bottom-3">
          &copy;2023 7-Empire. All rights reserved. Powered by Geek-Empire
        </p>
      </div>
    </div>
  )
}

export default index