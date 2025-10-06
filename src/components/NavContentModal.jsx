import React from 'react'

export default function NavContentModal({ open = false, onClose = () => {}, title = '', images = [] }){
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" onClick={onClose}></div>

      <div className="relative w-full max-w-4xl mt-24 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h3 className="text-lg font-semibold">{title ? title.charAt(0).toUpperCase() + title.slice(1) : 'Preview'}</h3>
          <button onClick={onClose} aria-label="Close" className="text-gray-600 hover:text-gray-800">✕</button>
        </div>

        <div className="p-4">
          {images && images.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {images.map((src, idx) => (
                <div key={idx} className="h-40 bg-gray-100 rounded overflow-hidden">
                  <img src={src} alt={`${title} ${idx}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-gray-500">No preview available.</div>
          )}
        </div>
      </div>
    </div>
  )
}
