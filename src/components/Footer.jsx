import React from 'react'
import { FiDollarSign } from 'react-icons/fi'
import { RiGlobalLine } from 'react-icons/ri'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function Footer(){
  return (
    <footer className="mt-12 bg-white border-t border-gray-200">
      <div className=" px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h4 className="text-sm font-semibold mb-3">Support</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a className="hover:underline">Help Center</a></li>
              <li><a className="hover:underline">Get help with a safety issue</a></li>
              <li><a className="hover:underline">AirCover</a></li>
              <li><a className="hover:underline">Anti-discrimination</a></li>
              <li><a className="hover:underline">Disability support</a></li>
              <li><a className="hover:underline">Cancellation options</a></li>
              <li><a className="hover:underline">Report neighborhood concern</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Hosting</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a className="hover:underline">Airbnb your home</a></li>
              <li><a className="hover:underline">Airbnb your experience</a></li>
              <li><a className="hover:underline">Airbnb your service</a></li>
              <li><a className="hover:underline">AirCover for Hosts</a></li>
              <li><a className="hover:underline">Hosting resources</a></li>
              <li><a className="hover:underline">Community forum</a></li>
              <li><a className="hover:underline">Hosting responsibly</a></li>
              <li><a className="hover:underline">Airbnb-friendly apartments</a></li>
              <li><a className="hover:underline">Join a free Hosting class</a></li>
              <li><a className="hover:underline">Find a co-host</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Airbnb</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a className="hover:underline">2025 Summer Release</a></li>
              <li><a className="hover:underline">Newsroom</a></li>
              <li><a className="hover:underline">Careers</a></li>
              <li><a className="hover:underline">Investors</a></li>
              <li><a className="hover:underline">Gift cards</a></li>
              <li><a className="hover:underline">Airbnb.org emergency stays</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-4">
            <div>© 2025 Airbnb, Inc.</div>
            <a className="hover:underline">Terms</a>
            <a className="hover:underline">Sitemap</a>
            <a className="hover:underline">Privacy</a>
            <a className="hover:underline inline-flex items-center gap-2">Your Privacy Choices
              <span className="inline-flex" aria-hidden>
                <svg width="26" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="25" height="11" rx="5.5" fill="#fff"></rect>
                  <path d="M14 1h7a5 5 0 010 10H11l3-10z" fill="#06F"></path>
                  <path d="M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5" stroke="#06F" strokeLinecap="round"></path>
                  <path d="M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5" stroke="#fff" strokeLinecap="round"></path>
                  <rect x="0.5" y="0.5" width="25" height="11" rx="5.5" stroke="#06F"></rect>
                </svg>
              </span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button aria-label="Select language" title="Language" className="font-bold flex items-center gap-2 px-2 py-1 border border-gray-200 rounded text-sm">
              <RiGlobalLine className="w-4 h-4" aria-hidden /> English (US)
            </button>

            <button aria-label="Select currency" title="Currency" className="font-bold flex items-center gap-2 px-2 py-1 border border-gray-200 rounded text-sm">
              <FiDollarSign className="w-4 h-4" />  USD
            </button>

            <div className="flex items-center gap-3 text-gray-700">
              <a href="#" aria-label="Facebook" className="hover:opacity-80"><FaFacebook className="w-4 h-4" /></a>
              <a href="#" aria-label="X" className="hover:opacity-80"><FaXTwitter className="w-4 h-4" /></a>
              <a href="#" aria-label="Instagram" className="hover:opacity-80"><FaInstagram className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
