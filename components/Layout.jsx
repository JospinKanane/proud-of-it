import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
      <>
        <Header/>
        {children}
      </>
      <>
        <Footer/>
        {children}
      </>
    </>
  )
}

export default Layout