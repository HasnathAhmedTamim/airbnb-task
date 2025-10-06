import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { MdExplore, MdRoomService } from 'react-icons/md'

export default function NavLinks({ mobile = false, onOpen }){
  const iconSize = mobile ? 'w-6 h-6 mb-1' : 'w-8 h-8 mb-1'
  const base = ({isActive}) => isActive ? `inline-flex flex-col items-center text-sm font-medium border-b-2 border-rose-500 pb-2 text-gray-900 px-3` : `inline-flex flex-col items-center text-sm text-gray-600 pb-2 hover:text-gray-800 px-3`
  const badgeClass = mobile ? 'absolute -top-1 -right-1 bg-gray-900 text-white text-[9px] px-1 rounded-full' : 'absolute -top-2 -right-2 bg-gray-900 text-white text-[10px] px-1 rounded-full'

  return (
    <nav className={`inline-flex items-center ${mobile ? 'justify-center gap-4' : 'gap-6'}`} aria-label="Main navigation">
      {onOpen ? (
        <button type="button" onClick={() => onOpen('homes')} className={base({isActive:false})}>
          <AiFillHome className={`${iconSize} text-gray-700`} />
          <span>Homes</span>
        </button>
      ) : (
        <NavLink to="/" end className={base}>
          <AiFillHome className={`${iconSize} text-gray-700`} />
          <span>Homes</span>
        </NavLink>
      )}

      {onOpen ? (
        <button type="button" onClick={() => onOpen('experiences')} className={base({isActive:false})}>
          <div className="relative">
            <MdExplore className={`${iconSize} text-gray-700`} />
            <span className={badgeClass}>NEW</span>
          </div>
          <span>Experiences</span>
        </button>
      ) : (
        <NavLink to="/experiences" className={base}>
          <div className="relative">
            <MdExplore className={`${iconSize} text-gray-700`} />
            <span className={badgeClass}>NEW</span>
          </div>
          <span>Experiences</span>
        </NavLink>
      )}

      {onOpen ? (
        <button type="button" onClick={() => onOpen('services')} className={base({isActive:false})}>
          <div className="relative">
            <MdRoomService className={`${iconSize} text-gray-700`} />
            <span className={badgeClass}>NEW</span>
          </div>
          <span>Services</span>
        </button>
      ) : (
        <NavLink to="/services" className={base}>
          <div className="relative">
            <MdRoomService className={`${iconSize} text-gray-700`} />
            <span className={badgeClass}>NEW</span>
          </div>
          <span>Services</span>
        </NavLink>
      )}
    </nav>
  )
}
