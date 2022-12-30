import React from 'react'
import Link from 'next/link'


const categories = [{name:"React", slug:"react-dev"},{name:"Web dev", slug:"web-dev"}, {name:"About", slug:"about"}, {name:"Contact", slug:"contact"}]

const Categories = () => {
  return (
      <div className='navBar p-0 font-bold bg-black border-t border-gray-700 w-full m-0' id='myNavbar'>
         {
          categories.map((category) => (
            <Link className='gap-20 p-5 '  key={category.slug} href={`/category/${category.slug}`} >
              <span className='cursor-pointer text-white hover:text-red-900'>{category.name}</span>
            </Link>
          ))
         }
      </div>
  )
}

export default Categories