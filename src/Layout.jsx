import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
// import Slideshow from './components/Slideshow/Slider'

// import HeaderOne from './components/Dashboard/Dashboard'
function Layout() {
  return (
    <>
    
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout