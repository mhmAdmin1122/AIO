import React from 'react'
import Image from 'next/image'
import logo from './Images/android-chrome-192x192.png'

export default function Navbar() {
  return (
    <>
      <nav className='navbar-conatiner container d-flex'>
        <div className="logo-box d-flex w-10">
            <Image src={logo} alt="logo" className='w-10' />
        </div>
        <ul className="navbar-tab-list d-flex">
            <li className="navbarTabs">Home</li>
            <li className="navbarTabs">About</li>
            <li className="navbarTabs">Services</li>
            <li className="navbarTabs">Excercise &amp; Quiz</li>
            <li className="navbarTabs">Products</li>
            <li className="navbarTabs">Tools</li>
        </ul>
      </nav>
    </>
  )
}
