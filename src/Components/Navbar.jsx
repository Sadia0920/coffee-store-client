import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../Components/Navbar.css'

export default function Navbar() {
    const links = <>
    <NavLink to='/' className='text-lg font-semibold'>Home</NavLink>
    <NavLink to='/about' className='ml-5 text-lg font-semibold'>About</NavLink>
    <NavLink to='/addCoffee' className='ml-5 text-lg font-semibold'>Add Coffee</NavLink>
    <NavLink to='/users' className='ml-5 text-lg font-semibold'>Users</NavLink>
    </>
  return (
    <div className='bg-[rgba(49,30,27,0.7)] text-white'>
        <div className="navbar w-10/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Coffee-Toffee</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='signin'><button className="btn">Sign In</button></Link>
    <Link to='signup'><button className="btn ml-5">Sign Up</button></Link>
  </div>
</div>
    </div>
  )
}
