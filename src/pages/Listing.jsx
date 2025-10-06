import React from 'react'
import { useParams } from 'react-router-dom'

export default function Listing(){
  const { id } = useParams()
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Listing {id}</h1>
      <p className="text-gray-600">Details page placeholder for listing {id}.</p>
    </main>
  )
}
