import React, { useRef, useState, useEffect } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

export default function CompactSearchPill({ onOpen }){
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function onDoc(e){
      if (!ref.current) return
      if (ref.current.contains(e.target)) return
      setOpen(false)
    }
    function onKey(e){
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('click', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <div ref={ref} className="hidden md:flex items-center relative">
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="flex items-center bg-white border border-gray-200 rounded-full shadow px-3 py-2 gap-4"
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <button title="Search destination (popover)" type="button" onClick={() => onOpen && onOpen('where')} className="text-sm text-gray-700">Anywhere</button>
        <button title="Select dates" type="button" onClick={() => onOpen && onOpen('dates')} className="text-sm text-gray-700">Anytime</button>
        <button title="Add guests" type="button" onClick={() => onOpen && onOpen('guests')} className="text-sm text-gray-700">Add guests</button>
        <button onClick={() => onOpen && onOpen('search')} className="ml-2 bg-rose-500 text-white w-9 h-9 rounded-full flex items-center justify-center">
          <HiOutlineSearch className="w-4 h-4" />
        </button>
      </div>

      {open && (
        <div role="dialog" aria-label="Quick search" className="absolute left-1/2 transform -translate-x-1/2 top-full mt-3 w-80 bg-white rounded-xl shadow-lg border border-gray-200 p-3 z-50">
          <div className="flex items-center justify-between gap-3">
            <button className="flex-1 text-left text-sm text-gray-700" onClick={() => { onOpen && onOpen('where'); setOpen(false) }}>Anywhere</button>
            <button className="flex-1 text-center text-sm text-gray-700" onClick={() => { onOpen && onOpen('dates'); setOpen(false) }}>Anytime</button>
            <button className="flex-1 text-right text-sm text-gray-700" onClick={() => { onOpen && onOpen('guests'); setOpen(false) }}>Add guests</button>
          </div>
        </div>
      )}
    </div>
  )
}
