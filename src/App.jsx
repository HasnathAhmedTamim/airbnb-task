
import React, { useState } from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import { HiOutlineGlobeAlt, HiOutlineSearch } from 'react-icons/hi'
import { AiFillHome } from 'react-icons/ai'
import { MdExplore } from 'react-icons/md'
import { MdRoomService } from 'react-icons/md'
import logo from './assets/Airbnb-Logo.wine.png'

function HeaderNav(){
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-30 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="h-12 w-auto object-contain" />
          </div>

          {/* Center nav in the header (visible on md+) */}
          <nav className="hidden md:flex items-center justify-center gap-8">
            <NavLink to="/" end className={({isActive}) => isActive ? 'inline-flex flex-col items-center text-sm font-medium border-b-2 border-rose-500 pb-2 text-gray-900' : 'inline-flex flex-col items-center text-sm text-gray-600 pb-2 hover:text-gray-800'}>
              <AiFillHome className="w-7 h-7 mb-1 text-gray-700" />
              <span>Homes</span>
            </NavLink>

            <NavLink to="/experiences" className={({isActive}) => isActive ? 'inline-flex flex-col items-center text-sm font-medium border-b-2 border-rose-500 pb-2 text-gray-900' : 'inline-flex flex-col items-center text-sm text-gray-600 pb-2 hover:text-gray-800'}>
              <div className="relative">
                <MdExplore className="w-7 h-7 mb-1 text-gray-700" />
                <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-[10px] px-1 rounded-full">NEW</span>
              </div>
              <span>Experiences</span>
            </NavLink>

            <NavLink to="/services" className={({isActive}) => isActive ? 'inline-flex flex-col items-center text-sm font-medium border-b-2 border-rose-500 pb-2 text-gray-900' : 'inline-flex flex-col items-center text-sm text-gray-600 pb-2 hover:text-gray-800'}>
              <div className="relative">
                <MdRoomService className="w-7 h-7 mb-1 text-gray-700" />
                <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-[10px] px-1 rounded-full">NEW</span>
              </div>
              <span>Services</span>
            </NavLink>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden lg:inline-flex px-3 py-1.5 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-rose-200">Become a host</button>
            <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-rose-200" aria-label="globe"><HiOutlineGlobeAlt className="w-5 h-5 text-gray-600" /></button>
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
        {/* Mobile nav row (visible below header on small screens) */}
        <nav className="flex md:hidden items-center justify-center gap-6 py-3">
          <NavLink to="/" end className={({isActive}) => isActive ? 'inline-flex flex-col items-center text-sm font-medium border-b-2 border-rose-500 pb-2 text-gray-900' : 'inline-flex flex-col items-center text-sm text-gray-600 pb-2 hover:text-gray-800'}>
            <AiFillHome className="w-6 h-6 mb-1 text-gray-700" />
            <span>Homes</span>
          </NavLink>

          <NavLink to="/experiences" className={({isActive}) => isActive ? 'inline-flex flex-col items-center text-sm font-medium border-b-2 border-rose-500 pb-2 text-gray-900' : 'inline-flex flex-col items-center text-sm text-gray-600 pb-2 hover:text-gray-800'}>
            <div className="relative">
              <MdExplore className="w-6 h-6 mb-1 text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-[10px] px-1 rounded-full">NEW</span>
            </div>
            <span>Experiences</span>
          </NavLink>

          <NavLink to="/services" className={({isActive}) => isActive ? 'inline-flex flex-col items-center text-sm font-medium border-b-2 border-rose-500 pb-2 text-gray-900' : 'inline-flex flex-col items-center text-sm text-gray-600 pb-2 hover:text-gray-800'}>
            <div className="relative">
              <MdRoomService className="w-6 h-6 mb-1 text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-[10px] px-1 rounded-full">NEW</span>
            </div>
            <span>Services</span>
          </NavLink>
        </nav>

        {/* Expanded search pill centered below the navigation */}
        <div className="w-full flex justify-center mt-2 mb-6">
          <div className="relative z-50 w-full max-w-4xl bg-white border border-gray-200 rounded-full shadow-xl p-3 flex items-center divide-x divide-gray-200">
            <div className="flex-1 px-6 py-4">
              <div className="text-xs text-gray-500">Where</div>
              <div className="text-sm text-gray-700">Search destinations</div>
            </div>
            <div className="w-40 px-6 py-4">
              <div className="text-xs text-gray-500">Check in</div>
              <div className="text-sm text-gray-700">Add dates</div>
            </div>
            <div className="w-40 px-6 py-4">
              <div className="text-xs text-gray-500">Check out</div>
              <div className="text-sm text-gray-700">Add dates</div>
            </div>
            <div className="flex items-center gap-3 px-6 py-3">
              <div className="text-sm text-gray-700">Who</div>
              <button className="bg-rose-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:brightness-95">
                <HiOutlineSearch className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
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
