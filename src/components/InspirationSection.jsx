import React, { useState } from 'react'

export default function InspirationSection() {
  const [active, setActive] = useState('tips')

  const tips = [
    { title: 'Family travel hub', subtitle: 'Tips and inspiration' },
    { title: 'Family budget travel', subtitle: 'Get there for less' },
    { title: 'Vacation ideas for any budget', subtitle: 'Make it special without making it spendy' },
    { title: 'Travel Europe on a budget', subtitle: 'How to take the kids to Europe for less' },
    { title: 'Outdoor adventure', subtitle: 'Explore nature with the family' },
    { title: 'Bucket list national parks', subtitle: 'Must-see parks for family travel' },
    { title: 'Kid-friendly state parks', subtitle: 'Check out these family-friendly hikes' },
  ]

  const places = [
    'Albuquerque', 'Arlington, TX', 'Atlanta Metro', 'Augusta', 'Austin Metro', 'Baton Rouge',
    'Bentonville', 'Birmingham', 'Boise', 'Boston Metro', 'Boulder', 'Charlotte',
    'Chicago Metro', 'Cincinnati', 'Columbus', 'Crestview', 'Dallas', 'Show more'
  ]

  return (
    <section className="mt-10 bg-white w-full">
      <div className="px-6 py-8">
        <h2 className="text-2xl font-semibold mb-4">Inspiration for future getaways</h2>

        <div className="border-b border-gray-200 mb-6">
          <nav className="flex gap-6" role="tablist" aria-label="Inspiration tabs">
            <button
              role="tab"
              aria-selected={active === 'tips'}
              className={`pb-3 text-sm ${active === 'tips' ? 'font-medium border-b-2 border-rose-500' : 'text-gray-600'}`}
              onClick={() => setActive('tips')}
            >
              Travel tips & inspiration
            </button>

            <button
              role="tab"
              aria-selected={active === 'places'}
              className={`pb-3 text-sm ${active === 'places' ? 'font-medium border-b-2 border-rose-500' : 'text-gray-600'}`}
              onClick={() => setActive('places')}
            >
              Airbnb-friendly apartments
            </button>
          </nav>
        </div>

        {active === 'tips' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tips.map((t, i) => (
              <div key={i} className="space-y-1">
                <div className="font-medium text-sm text-gray-800">{t.title}</div>
                <div className="text-xs text-gray-500">{t.subtitle}</div>
              </div>
            ))}
          </div>
        )}

        {active === 'places' && (
          <div className="mt-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-6 gap-x-8 text-sm">
              {places.map((p, i) => (
                <div key={i} className={`${p === 'Show more' ? 'text-rose-600 font-medium' : ''}`}>
                  <div className={`${p === 'Show more' ? 'font-medium' : 'font-semibold'} text-sm`}>{p}</div>
                  <div className="text-xs text-gray-500">{i % 2 === 0 ? 'New Mexico' : 'Texas'}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
