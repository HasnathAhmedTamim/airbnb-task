import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

export default function SearchPill(){
  return (
    <div className="w-full flex justify-center mt-2 mb-6">
      {/* Full pill for md and up */}
      <div className="hidden md:block">
        <div className="relative z-10 w-full max-w-4xl bg-white border border-gray-200 rounded-full shadow-xl p-3 flex items-center divide-x divide-gray-200">
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
            <button className="bg-rose-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:brightness-95" aria-label="search">
              <HiOutlineSearch className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Stacked column for small screens */}
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
