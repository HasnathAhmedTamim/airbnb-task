import React, { useEffect, useRef, useState } from 'react'
import { HiOutlineSearch, HiOutlineLocationMarker } from 'react-icons/hi'
// Date picker
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

export default function SearchPill({ expanded = true, onCloseField, floating = false, onClose, onSearch }){
  const [openWhere, setOpenWhere] = useState(false)
  const tabsIdRef = useRef(`searchpill_tabs_${Math.random().toString(36).slice(2,8)}`)
  const whereRef = useRef(null)
  const popRef = useRef(null)
  const containerRef = useRef(null)
  const [whereValue, setWhereValue] = useState(null)
  const [openDates, setOpenDates] = useState(false)
  const [activeDateField, setActiveDateField] = useState('checkin')
  const [openGuests, setOpenGuests] = useState(false)
  const [activeTab, setActiveTab] = useState('dates')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [range, setRange] = useState({ from: undefined, to: undefined })
  const [guests, setGuests] = useState({ adults: 1, children: 0, infants: 0 })

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

  function applyGuests() {
    setOpenGuests(false)
  }

  function doSearch() {
    const payload = {
      where: whereValue,
      dates: { checkIn: checkIn || null, checkOut: checkOut || null },
      guests,
    }
    if (typeof window !== 'undefined') console.log('Search', payload)
    if (typeof onCloseField === 'function') onCloseField()
    if (typeof onClose === 'function') onClose()
    // call prop callback if provided
    if (typeof onSearch === 'function') onSearch(payload)
    // emit a custom event for other listeners (keeps backwards compat)
    if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
      const ev = new CustomEvent('searchpill:search', { detail: payload })
      window.dispatchEvent(ev)
    }
  }

  // helper: set a month as selected range (start..end)
  function applyMonth(date) {
    const from = new Date(date.getFullYear(), date.getMonth(), 1)
    const to = new Date(date.getFullYear(), date.getMonth() + 1, 0)
    setRange({ from, to })
    setCheckIn(from.toISOString().slice(0,10))
    setCheckOut(to.toISOString().slice(0,10))
    setOpenDates(false)
  }

  function applyPresetDays(days) {
    const from = new Date()
    const to = new Date()
    to.setDate(from.getDate() + days)
    setRange({ from, to })
    setCheckIn(from.toISOString().slice(0,10))
    setCheckOut(to.toISOString().slice(0,10))
    setOpenDates(false)
  }

  function applyWeekend() {
    // find next Friday
    const today = new Date()
    const day = today.getDay()
    const daysUntilFri = (5 - day + 7) % 7 || 7
    const fri = new Date(today)
    fri.setDate(today.getDate() + daysUntilFri)
    const sun = new Date(fri)
    sun.setDate(fri.getDate() + 2)
    setRange({ from: fri, to: sun })
    setCheckIn(fri.toISOString().slice(0,10))
    setCheckOut(sun.toISOString().slice(0,10))
    setOpenDates(false)
  }

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
                  <div className="font-medium">{whereValue?.title || 'Anywhere'}</div>
                </div>
              </div>

              <button onClick={(e) => { e.stopPropagation(); setOpenDates(true); setActiveDateField('checkin') }} className={`text-left ${activeDateField === 'checkin' ? 'bg-white rounded-full px-3 py-2 shadow-sm' : ''}`}>
                <div className="text-xs text-gray-500">Check in</div>
                <div className="text-sm text-gray-700">{checkIn ? checkIn : 'Add dates'}</div>
              </button>

              <button onClick={(e) => { e.stopPropagation(); setOpenDates(true); setActiveDateField('checkout') }} className={`text-left ${activeDateField === 'checkout' ? 'bg-white rounded-full px-3 py-2 shadow-sm' : ''}`}>
                <div className="text-xs text-gray-500">Check out</div>
                <div className="text-sm text-gray-700">{checkOut ? checkOut : 'Add dates'}</div>
              </button>

              <div>
                <div className="text-xs text-gray-500">Anytime</div>
                <div className="text-sm text-gray-700">Anytime</div>
              </div>

              <div>
                <div className="text-xs text-gray-500">Guests</div>
                <div className="text-sm text-gray-700">{guests.adults + guests.children} guests</div>
              </div>
            </div>

              <div className="flex items-center">
              <button onClick={doSearch} className="bg-rose-500 text-white w-9 h-9 rounded-full flex items-center justify-center shadow-sm" aria-label="search">
                <HiOutlineSearch className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
            <div className={`relative z-10 w-full max-w-4xl bg-white border border-gray-200 rounded-full shadow-xl p-3 flex items-center divide-x divide-gray-200`}>
            <div className="flex-1 px-6 py-4 relative" ref={whereRef}>
              <button type="button" aria-haspopup="dialog" aria-expanded={openWhere} onClick={(e) => { e.stopPropagation(); setOpenWhere(s => !s) }} className="text-left w-full">
                <div className="text-xs text-gray-500">Where</div>
                <div className="text-sm text-gray-700 flex items-center gap-2">
                  <HiOutlineLocationMarker className="w-4 h-4 text-rose-500" />
                  <span>{whereValue?.title || 'Search destinations'}</span>
                </div>
              </button>

              {openWhere && (
                <div ref={popRef} role="dialog" aria-label="Suggested destinations" className="absolute left-0 top-full mt-3 w-80 bg-white rounded-xl shadow-lg border border-gray-200 p-3 z-40">
                  <div className="text-sm font-medium text-gray-800 mb-2">Suggested destinations</div>
                  <div className="max-h-56 overflow-y-auto no-scrollbar space-y-3 pr-2">
                      {suggestions.map((s, i) => (
                        <button key={i} onClick={(e) => { e.stopPropagation(); setWhereValue(s); setOpenWhere(false); }} className="w-full text-left flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50">
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

            <button onClick={(e) => { e.stopPropagation(); setOpenDates(true); setActiveDateField('checkin') }} className="w-40 px-6 py-4 relative text-left">
              <div className="text-xs text-gray-500">Check in</div>
              <div className="text-sm text-gray-700">{checkIn ? checkIn : 'Add dates'}</div>
            </button>
            <button onClick={(e) => { e.stopPropagation(); setOpenDates(true); setActiveDateField('checkout') }} className="w-40 px-6 py-4 relative text-left">
              <div className="text-xs text-gray-500">Check out</div>
              <div className="text-sm text-gray-700">{checkOut ? checkOut : 'Add dates'}</div>
            </button>

            {/* large calendar popover (centered under the whole pill) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-4 z-50" style={{ display: openDates ? 'block' : 'none' }}>
              <div className="bg-white rounded-2xl shadow-xl w-[720px] max-w-[92vw] p-6">
                <div className="flex items-center justify-center gap-3 mb-4" role="tablist" aria-label="Calendar view">
                  <label className={`px-4 py-2 rounded-full text-sm ${activeTab === 'dates' ? 'bg-gray-100' : ''}`}>
                    <input
                      type="radio"
                      name={tabsIdRef.current}
                      className="sr-only"
                      aria-label="Dates"
                      checked={activeTab === 'dates'}
                      onChange={() => setActiveTab('dates')}
                    />
                    Dates
                  </label>

                  <label className={`px-4 py-2 rounded-full text-sm ${activeTab === 'months' ? 'bg-gray-100' : ''}`}>
                    <input
                      type="radio"
                      name={tabsIdRef.current}
                      className="sr-only"
                      aria-label="Months"
                      checked={activeTab === 'months'}
                      onChange={() => setActiveTab('months')}
                    />
                    Months
                  </label>

                  <label className={`px-4 py-2 rounded-full text-sm ${activeTab === 'flexible' ? 'bg-gray-100' : ''}`}>
                    <input
                      type="radio"
                      name={tabsIdRef.current}
                      className="sr-only"
                      aria-label="Flexible"
                      checked={activeTab === 'flexible'}
                      onChange={() => setActiveTab('flexible')}
                    />
                    Flexible
                  </label>
                </div>
                <div className="transition-opacity duration-200 ease-in-out">
                  {activeTab === 'dates' && (
                    <DayPicker
                      mode="range"
                      selected={range}
                      onSelect={(r) => {
                        const newRange = r || { from: undefined, to: undefined }
                        setRange(newRange)
                        // If user completed a range, apply dates immediately
                        if (newRange?.from && newRange?.to) {
                          setCheckIn(newRange.from.toISOString().slice(0,10))
                          setCheckOut(newRange.to.toISOString().slice(0,10))
                          setOpenDates(false)
                        }
                      }}
                      numberOfMonths={2}
                    />
                  )}

                  {activeTab === 'months' && (
                    <div className="grid grid-cols-3 gap-2">
                      {Array.from({ length: 6 }).map((_, i) => {
                        const dt = new Date()
                        dt.setMonth(dt.getMonth() + i)
                        return (
                          <button key={i} onClick={() => applyMonth(dt)} className="px-3 py-2 border rounded text-sm">{dt.toLocaleString(undefined, { month: 'short', year: 'numeric' })}</button>
                        )
                      })}
                    </div>
                  )}

                  {activeTab === 'flexible' && (
                    <div className="space-y-2">
                      <div className="flex gap-2 flex-wrap">
                        {[1,2,3,7,14].map(d => (
                          <button key={d} onClick={() => applyPresetDays(d)} className="px-3 py-2 border rounded">Next {d} days</button>
                        ))}
                      </div>
                      <div className="pt-2">
                        <button onClick={applyWeekend} className="px-3 py-2 border rounded">Next weekend</button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-4 flex items-center gap-3 flex-wrap">
                  <button onClick={() => { /* exact dates - no-op */ }} className="px-3 py-2 rounded-full border">Exact dates</button>
                  {[1,2,3,7,14].map((d)=> (
                    <button key={d} onClick={() => {
                      const from = range?.from || new Date()
                      const to = new Date(from)
                      to.setDate(from.getDate() + d)
                      setRange({ from, to })
                      setCheckIn(from.toISOString().slice(0,10))
                      setCheckOut(to.toISOString().slice(0,10))
                      setOpenDates(false)
                    }} className="px-3 py-2 rounded-full border">± {d} {d===1? 'day':'days'}</button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 px-6 py-3 relative">
              <div className="text-sm text-gray-700">Who</div>
              <div className="text-sm text-gray-700">{guests.adults + guests.children} guests</div>
              <div className="ml-3">
                <button onClick={(e) => { e.stopPropagation(); setOpenGuests(g => !g) }} className="bg-rose-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:brightness-95" aria-label="open guests">
                  <HiOutlineSearch className="w-4 h-4" />
                </button>
              </div>

              {/* Guests popover */}
              <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg p-4" style={{ display: openGuests ? 'block' : 'none' }}>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Adults</div>
                      <div className="text-xs text-gray-500">Ages 13+</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => setGuests(g => ({ ...g, adults: Math.max(1, g.adults - 1) }))} className="w-8 h-8 rounded-full border">-</button>
                      <div className="w-6 text-center">{guests.adults}</div>
                      <button onClick={() => setGuests(g => ({ ...g, adults: g.adults + 1 }))} className="w-8 h-8 rounded-full border">+</button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Children</div>
                      <div className="text-xs text-gray-500">Ages 2–12</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => setGuests(g => ({ ...g, children: Math.max(0, g.children - 1) }))} className="w-8 h-8 rounded-full border">-</button>
                      <div className="w-6 text-center">{guests.children}</div>
                      <button onClick={() => setGuests(g => ({ ...g, children: g.children + 1 }))} className="w-8 h-8 rounded-full border">+</button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Infants</div>
                      <div className="text-xs text-gray-500">Under 2</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => setGuests(g => ({ ...g, infants: Math.max(0, g.infants - 1) }))} className="w-8 h-8 rounded-full border">-</button>
                      <div className="w-6 text-center">{guests.infants}</div>
                      <button onClick={() => setGuests(g => ({ ...g, infants: g.infants + 1 }))} className="w-8 h-8 rounded-full border">+</button>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button onClick={applyGuests} className="px-3 py-1 bg-rose-500 text-white rounded text-sm">Done</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile stacked */}
      <div className="md:hidden w-full px-4">
        <div className="flex flex-col gap-3">
          <button onClick={(e) => { e.stopPropagation(); setOpenWhere(s => !s) }} type="button" className="w-full bg-white border border-gray-200 rounded-md p-4 flex flex-col text-left">
            <div className="text-xs text-gray-500">Where</div>
            <div className="text-sm text-gray-700">{whereValue?.title || 'Search destinations'}</div>
          </button>

          <button onClick={(e) => { e.stopPropagation(); setOpenDates(true); setActiveDateField('checkin') }} className="w-full bg-white border border-gray-200 rounded-md p-4 flex flex-col text-left">
            <div className="text-xs text-gray-500">Check in</div>
            <div className="text-sm text-gray-700">{checkIn ? checkIn : 'Add dates'}</div>
          </button>

          <button onClick={(e) => { e.stopPropagation(); setOpenDates(true); setActiveDateField('checkout') }} className="w-full bg-white border border-gray-200 rounded-md p-4 flex flex-col text-left">
            <div className="text-xs text-gray-500">Check out</div>
            <div className="text-sm text-gray-700">{checkOut ? checkOut : 'Add dates'}</div>
          </button>

          <div className="w-full bg-white border border-gray-200 rounded-md p-4 flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-700">Who</div>
              <div className="text-xs text-gray-500">{guests.adults + guests.children} guests</div>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={(e) => { e.stopPropagation(); setOpenGuests(g => !g) }} className="bg-white text-gray-700 border border-gray-200 px-3 py-2 rounded-md">Guests</button>
              <button onClick={doSearch} className="bg-rose-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:brightness-95" aria-label="search">
                <HiOutlineSearch className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile date picker modal */}
      {openDates && (
        <div className="md:hidden fixed inset-0 z-50 flex items-end">
          <div onClick={() => setOpenDates(false)} className="absolute inset-0 bg-black/40" />
          <div className="relative w-full bg-white rounded-t-2xl p-4 max-h-[90vh] overflow-auto">
            <div className="flex items-center justify-between mb-3">
              <div className="text-lg font-medium">Select dates</div>
              <button onClick={() => setOpenDates(false)} className="text-sm text-gray-600">Close</button>
            </div>
            <DayPicker
              mode="range"
              selected={range}
              onSelect={(r) => {
                const newRange = r || { from: undefined, to: undefined }
                setRange(newRange)
                if (newRange?.from && newRange?.to) {
                  setCheckIn(newRange.from.toISOString().slice(0,10))
                  setCheckOut(newRange.to.toISOString().slice(0,10))
                  setOpenDates(false)
                }
              }}
              numberOfMonths={1}
            />
            <div className="mt-3 flex justify-end">
              <button onClick={() => setOpenDates(false)} className="px-4 py-2 bg-rose-500 text-white rounded">Done</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
