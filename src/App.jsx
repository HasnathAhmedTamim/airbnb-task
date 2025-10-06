
import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import { HiOutlineGlobeAlt } from 'react-icons/hi'
import NavLinks from './components/NavLinks'
import SearchPill from './components/SearchPill'
import HeaderActions from './components/HeaderActions'
import logo from './assets/Airbnb-Logo.wine.png'
import CitySection from './components/CitySection'
import listings from './data/mockListings'

function HeaderNav(){
  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-30 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="h-12 w-auto object-contain" />
          </div>

          {/* Center nav in the header: desktop and mobile versions */}
          <div className="flex-1 flex items-center justify-center">
            <nav className="hidden md:flex items-center justify-center gap-10">
              <NavLinks />
            </nav>

            {/* mobile nav hidden from header; rendered below header for small screens */}
          </div>

          <div>
            <HeaderActions />
          </div>
        </div>
        {/* removed duplicate mobile nav below header since mobile nav is now inside the header */}

        {/* search pill moved out of header to avoid overlap */}
      </div>
    </header>
  )
}

function HomePage(){
  return (
    <div>
      {listings.map((l) => (
        <CitySection key={l.city} city={l.city} items={l.items} />
      ))}
    </div>
  )
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
      {/* Mobile nav (stacked/centered) - visible only on small screens */}
      <div className="md:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center py-3">
            <NavLinks mobile />
          </div>
        </div>
      </div>

      {/* Search pill moved outside the sticky header so it doesn't overlap the top */}
      <div className="mt-2">
        <SearchPill />
      </div>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/experiences" element={<ExperiencesPage/>} />
        <Route path="/services" element={<ServicesPage/>} />
      </Routes>
    </div>
  )
}
