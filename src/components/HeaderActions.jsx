import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { HiOutlineGlobeAlt, HiOutlineMenu } from 'react-icons/hi'

function Item({ children, href }){
  return (
    <a href={href || '#'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{children}</a>
  )
}

export default function HeaderActions(){
  return (
    <div className="flex items-center gap-4">
      <button className="hidden lg:inline-flex px-3 py-1.5 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-rose-200">Become a host</button>

      <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-rose-200" aria-label="globe">
        <HiOutlineGlobeAlt className="w-5 h-5 text-gray-600" />
      </button>

      <Menu as="div" className="relative">
        <Menu.Button className="p-2 rounded-full bg-white shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-rose-200">
          <HiOutlineMenu className="w-5 h-5 text-gray-700" />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-150"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg py-2 z-50">
            <div className="px-4 py-3 border-b">
              <div className="text-sm font-medium text-gray-900">Help Center</div>
            </div>
            <div className="py-2">
              <Item href="#">Become a host <div className="text-xs text-gray-500">It's easy to start hosting and earn extra income.</div></Item>
              <Item href="#">Refer a Host</Item>
              <Item href="#">Find a co-host</Item>
              <Item href="#">Gift cards</Item>
              <div className="border-t mt-2" />
              <Item href="#">Log in or sign up</Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
