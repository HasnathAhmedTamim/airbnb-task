
import React, { useState } from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import { HiOutlineGlobeAlt } from 'react-icons/hi'
import logo from './assets/Airbnb-Logo.wine.png'

function HeaderNav(){
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="sticky top-0 bg-white z-20 shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-24 h-auto object-contain" />
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden lg:inline-flex px-3 py-2 rounded-full text-sm">Become a host</button>
            <button className="p-2 rounded-full hover:bg-gray-100" aria-label="globe"><HiOutlineGlobeAlt className="w-5 h-5 text-gray-600" /></button>
            <div className="relative">
              <button onClick={() => setMenuOpen(!menuOpen)} className="p-1.5 rounded-full shadow-sm flex items-center gap-2">Menu</button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-1">
                  <a className="block px-4 py-2 text-sm hover:bg-gray-100" href="#">Sign up</a>
                  <a className="block px-4 py-2 text-sm hover:bg-gray-100" href="#">Log in</a>
                  <a className="block px-4 py-2 text-sm hover:bg-gray-100" href="#">Host your home</a>
                </div>
              )}
            </div>
          </div>
        </div>
        <nav className="flex justify-center border-t border-b py-3">
          <div className="flex gap-6">
            <NavLink to="/" end className={({isActive}) => isActive ? 'text-sm font-semibold border-b-2 border-gray-900 pb-2' : 'text-sm text-gray-600'}>Homes</NavLink>
            <NavLink to="/experiences" className={({isActive}) => isActive ? 'text-sm font-semibold border-b-2 border-gray-900 pb-2' : 'text-sm text-gray-600'}>Experiences</NavLink>
            <NavLink to="/services" className={({isActive}) => isActive ? 'text-sm font-semibold border-b-2 border-gray-900 pb-2' : 'text-sm text-gray-600'}>Services</NavLink>
          </div>
        </nav>
      </div>
    </header>
  )
}

function HomePage(){
  return <div className="p-8">This is the Homes page content (placeholder).</div>
}

function ExperiencesPage(){
  return <div className="p-8">This is the Experiences page content (placeholder).</div>
}

function ServicesPage(){
  return <div className="p-8">This is the Services page content (placeholder).</div>
}

export default function App(){
  return (
    <div>
      <HeaderNav />

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/experiences" element={<ExperiencesPage/>} />
        <Route path="/services" element={<ServicesPage/>} />
      </Routes>
    </div>
  )
}
