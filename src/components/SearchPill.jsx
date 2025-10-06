import React, { useEffect, useRef, useState } from 'react'
import { HiOutlineSearch, HiOutlineLocationMarker } from 'react-icons/hi'

export default function SearchPill({ expanded = true, openField = null, onCloseField, floating = false, onClose }){
  const [openWhere, setOpenWhere] = useState(false)
  const whereRef = useRef(null)
  const popRef = useRef(null)
  const containerRef = useRef(null)

  const suggestions = [
    { title: 'Nearby', subtitle: "Find what's around you" },
    { title: 'Bangkok, Thailand', subtitle: 'Popular' },
    { title: 'London, United Kingdom', subtitle: 'Popular' },
  ]

  useEffect(() => {
    function onDocClick(e){
      if (!whereRef.current) return
      if (whereRef.current.contains(e.target)) return
      if (popRef.current && popRef.current.contains(e.target)) return
      setOpenWhere(false)
    }
    function onKey(e){ if (e.key === 'Escape') setOpenWhere(false) }
    document.addEventListener('click', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  useEffect(() => {
    if (!floating) return
    function onDoc(e){
      if (!containerRef.current) return
      if (containerRef.current.contains(e.target)) return
      if (onClose) onClose()
    }
    function onKey(e){ if (e.key === 'Escape' && onClose) onClose() }
    document.addEventListener('click', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [floating, onClose])

  if (!expanded && !floating && typeof window !== 'undefined' && window.innerWidth >= 768) return null

  return (
    <div ref={containerRef} className={`${floating ? 'fixed left-1/2 transform -translate-x-1/2 top-20 z-50' : 'w-full flex justify-center mt-2 mb-6'}`}>
      <div className="hidden md:block">
        {floating ? (
          <div className="relative z-10 w-full max-w-3xl bg-white border border-gray-200 rounded-full shadow-xl px-3 py-2 flex items-center justify-between">
            <div className="flex items-center gap-6 text-sm text-gray-700">
              <div className="flex items-center gap-3">
                <HiOutlineLocationMarker className="w-4 h-4 text-rose-500" />
                <div>
                  <div className="text-xs text-gray-500">Where</div>
                  <div className="font-medium">Anywhere</div>
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-500">Check in</div>
                <div className="text-sm text-gray-700">Add dates</div>
              </div>

              <div>
                <div className="text-xs text-gray-500">Check out</div>
                <div className="text-sm text-gray-700">Add dates</div>
              </div>

              <div>
                <div className="text-xs text-gray-500">Anytime</div>
                <div className="text-sm text-gray-700">Anytime</div>
              </div>

              <div>
                <div className="text-xs text-gray-500">Guests</div>
                <div className="text-sm text-gray-700">Add guests</div>
              </div>
            </div>

            <div className="flex items-center">
              <button className="bg-rose-500 text-white w-9 h-9 rounded-full flex items-center justify-center shadow-sm" aria-label="search">
                <HiOutlineSearch className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className={`relative z-10 w-full max-w-4xl bg-white border border-gray-200 rounded-full shadow-xl p-3 flex items-center divide-x divide-gray-200`}>
            <div className="flex-1 px-6 py-4 relative" ref={whereRef}>
              <button type="button" aria-haspopup="dialog" aria-expanded={openWhere} onClick={() => setOpenWhere(s => !s)} className="text-left w-full">
                <div className="text-xs text-gray-500">Where</div>
                <div className="text-sm text-gray-700 flex items-center gap-2">
                  <HiOutlineLocationMarker className="w-4 h-4 text-rose-500" />
                  <span>Search destinations</span>
                </div>
              </button>

              {openWhere && (
                <div ref={popRef} role="dialog" aria-label="Suggested destinations" className="absolute left-0 top-full mt-3 w-80 bg-white rounded-xl shadow-lg border border-gray-200 p-3 z-40">
                  <div className="text-sm font-medium text-gray-800 mb-2">Suggested destinations</div>
                  <div className="max-h-56 overflow-y-auto no-scrollbar space-y-3 pr-2">
                    {suggestions.map((s, i) => (
                      <button key={i} className="w-full text-left flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50">
                        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                          <HiOutlineLocationMarker className="w-5 h-5 text-rose-500" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-800">{s.title}</div>
                          <div className="text-xs text-gray-500">{s.subtitle}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
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
              <button className="bg-rose-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:brightness-95" aria-label="search">
                <HiOutlineSearch className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile stacked */}
      <div className="md:hidden w-full px-4">
        <div className="flex flex-col gap-3">
          <div className="w-full bg-white border border-gray-200 rounded-md p-4 flex flex-col">
            <div className="text-xs text-gray-500">Where</div>
            <div className="text-sm text-gray-700">Search destinations</div>
          </div>

          <div className="w-full bg-white border border-gray-200 rounded-md p-4 flex flex-col">
            <div className="text-xs text-gray-500">Check in</div>
            <div className="text-sm text-gray-700">Add dates</div>
          </div>

          <div className="w-full bg-white border border-gray-200 rounded-md p-4 flex flex-col">
            <div className="text-xs text-gray-500">Check out</div>
            <div className="text-sm text-gray-700">Add dates</div>
          </div>

          <div className="w-full bg-white border border-gray-200 rounded-md p-4 flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-700">Who</div>
            </div>
            <button className="bg-rose-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:brightness-95" aria-label="search">
              <HiOutlineSearch className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
