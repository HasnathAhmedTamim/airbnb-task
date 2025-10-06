
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import NavLinks from './components/NavLinks'
import SearchPill from './components/SearchPill'
import HeaderActions from './components/HeaderActions'
import logo from './assets/Airbnb-Logo.wine.png'
import CitySection from './components/CitySection'
import Home from './pages/Home'

function HeaderNav(){
  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-30 border-b border-gray-200 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="h-12 w-auto object-contain" />
          </div>

          {/* Center nav in header for md+ screens */}
          <div className="flex-1 flex items-center justify-center">
            <div className="hidden md:block">
              <NavLinks />
            </div>
          </div>

          <div>
            <HeaderActions />
          </div>
        </div>
      </div>
    </header>
  )
}

function HomePage(){
  const [listings, setListings] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    axios
      .get('/listings.json', { signal: controller.signal })
      .then((res) => setListings(res.data))
      .catch((err) => {
        if (axios.isCancel(err)) return
        setError(err.message || 'Error')
      })
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [])

  if (loading) return <div className="p-8 text-center">Loading listings…</div>
  if (error) return <div className="p-8 text-center text-red-600">Error loading listings: {error}</div>
  if (!listings || listings.length === 0) return <div className="p-8 text-center">No listings found.</div>

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
      <div className="md:hidden ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center py-3">
            <NavLinks mobile />
          </div>
        </div>
      </div>

      {/* Full search pill below the header (desktop and mobile stacked variant) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <SearchPill />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/experiences" element={<ExperiencesPage/>} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="*" element={
          <div className="p-8 text-center">
            <h2 className="text-2xl font-semibold mb-2">404 — Page not found</h2>
            <p className="text-gray-600">The page you requested does not exist.</p>
          </div>
        } />
      </Routes>
      {/* no modal */}
    </div>
  )
}
