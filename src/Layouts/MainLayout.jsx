import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

export default function MainLayout() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
