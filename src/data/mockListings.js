// Simple mock data for city sections. Images are inline SVG data URIs so no external assets are required.
function svgDataUrl(bg, title){
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' width='800' height='560'>
      <rect width='100%' height='100%' fill='${bg}' rx='16' />
      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='36' fill='rgba(255,255,255,0.9)' font-family='Arial, Helvetica, sans-serif'>${title}</text>
    </svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

const listings = [
  {
    city: 'Kuala Lumpur',
    items: [
      { title: 'Apartment in Bukit Bintang', price: '$76', nights: 'for 2 nights', rating: 4.87, img: 'https://a0.muscache.com/im/pictures/77ff00f3-348a-45d6-86fd-baccab647c5b.jpg?im_w=1200' },
      { title: 'Apartment in Bukit Bintang', price: '$86', nights: 'for 2 nights', rating: 4.94, img: 'https://a0.muscache.com/im/pictures/77ff00f3-348a-45d6-86fd-baccab647c5b.jpg?im_w=1200' },
      { title: 'Place to stay in Cheras', price: '$44', nights: 'for 2 nights', rating: 4.92, img: 'https://a0.muscache.com/im/pictures/77ff00f3-348a-45d6-86fd-baccab647c5b.jpg?im_w=1200' },
      { title: 'Place to stay in Bukit Bintang', price: '$45', nights: 'for 2 nights', rating: 4.95, img: 'https://a0.muscache.com/im/pictures/77ff00f3-348a-45d6-86fd-baccab647c5b.jpg?im_w=1200' },
      { title: 'Condo in PULAPOL', price: '$77', nights: 'for 2 nights', rating: 4.88, img: 'https://a0.muscache.com/im/pictures/77ff00f3-348a-45d6-86fd-baccab647c5b.jpg?im_w=1200' },
    ]
  },
  {
    city: 'Bangkok',
    items: [
      { title: 'Apartment in Khet Ratchathewi', price: '$83', nights: 'for 2 nights', rating: 4.95, img: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1031813899662473330/original/ee5f775d-c575-4a88-bbd3-a37e308c3843.jpeg?im_w=1200' },
      { title: 'Hotel room in Khet Phra Nakhon', price: '$23', nights: 'for 2 nights', rating: 4.79, img: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1031813899662473330/original/ee5f775d-c575-4a88-bbd3-a37e308c3843.jpeg?im_w=1200' },
      { title: 'Room in Khet Phra Nakhon', price: '$58', nights: 'for 2 nights', rating: 4.94, img: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1031813899662473330/original/ee5f775d-c575-4a88-bbd3-a37e308c3843.jpeg?im_w=1200' },
      { title: 'Apartment in Bangkok', price: '$60', nights: 'for 2 nights', rating: 4.85, img: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1031813899662473330/original/ee5f775d-c575-4a88-bbd3-a37e308c3843.jpeg?im_w=1200' },
    ]
  },
  {
    city: 'London',
    items: [
      { title: 'Flat in Central London', price: '$140', nights: 'for 2 nights', rating: 4.9, img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=60' },
      { title: 'Studio near Thames', price: '$120', nights: 'for 2 nights', rating: 4.8, img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=60' },
      { title: 'Apartment in Camden', price: '$110', nights: 'for 2 nights', rating: 4.8, img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=60' },
    ]
  }
]

export default listings
