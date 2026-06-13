import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const galleryItems = [
  // Rooms
  { id: 1, src: '/images/room-deluxe.jpg', alt: 'Deluxe Room', category: 'Rooms', size: 'large' },
  { id: 2, src: '/images/room-premium.jpg', alt: 'Premium Room', category: 'Rooms', size: 'small' },
  { id: 3, src: '/images/room-suite.jpg', alt: 'Executive Suite', category: 'Rooms', size: 'small' },
  { id: 4, src: '/images/room-junior-suite.jpg', alt: 'Junior Suite', category: 'Rooms', size: 'medium' },
  { id: 5, src: '/images/room-presidential.jpg', alt: 'Presidential Suite', category: 'Rooms', size: 'large' },
  { id: 6, src: '/images/room-classic.jpg', alt: 'Classic Room', category: 'Rooms', size: 'small' },
  { id: 7, src: '/images/room-deluxe-2.jpg', alt: 'Deluxe Room Detail', category: 'Rooms', size: 'small' },
  // Dining
  { id: 8, src: '/images/dining-restaurant.jpg', alt: 'Savanna & Co. Restaurant', category: 'Dining', size: 'large' },
  { id: 9, src: '/images/dining-bar.jpg', alt: 'The Gold Bar', category: 'Dining', size: 'medium' },
  { id: 10, src: '/images/dining-poolside.jpg', alt: 'Poolside Terrace', category: 'Dining', size: 'small' },
  { id: 11, src: '/images/dish-tilapia.jpg', alt: 'Pan-Seared Tilapia', category: 'Dining', size: 'small' },
  { id: 12, src: '/images/dish-nyama-choma.jpg', alt: 'Nyama Choma Platter', category: 'Dining', size: 'small' },
  { id: 13, src: '/images/dish-chocolate-tart.jpg', alt: 'Chocolate Safari Tart', category: 'Dining', size: 'small' },
  { id: 14, src: '/images/dish-breakfast.jpg', alt: 'Breakfast Platter', category: 'Dining', size: 'medium' },
  // Facilities
  { id: 15, src: '/images/facility-pool.jpg', alt: 'Infinity Pool', category: 'Facilities', size: 'large' },
  { id: 16, src: '/images/facility-pool-2.jpg', alt: 'Pool at Night', category: 'Facilities', size: 'medium' },
  { id: 17, src: '/images/facility-spa.jpg', alt: 'Spa & Wellness', category: 'Facilities', size: 'small' },
  { id: 18, src: '/images/facility-gym.jpg', alt: 'Fitness Centre', category: 'Facilities', size: 'small' },
  { id: 19, src: '/images/facility-lounge.jpg', alt: 'Executive Lounge', category: 'Facilities', size: 'medium' },
  { id: 20, src: '/images/facility-garden.jpg', alt: 'Hotel Gardens', category: 'Facilities', size: 'small' },
  { id: 21, src: '/images/facility-events.jpg', alt: 'Event Spaces', category: 'Facilities', size: 'small' },
  // Hotel
  { id: 22, src: '/images/hero-building.jpg', alt: "Annan's Hotel Exterior", category: 'Hotel', size: 'large' },
  { id: 23, src: '/images/about-lobby.jpg', alt: 'Hotel Lobby', category: 'Hotel', size: 'medium' },
  { id: 24, src: '/images/about-detail.jpg', alt: 'Interior Detail', category: 'Hotel', size: 'small' },
  { id: 25, src: '/images/testimonial-bg.jpg', alt: 'Hotel Atmosphere', category: 'Hotel', size: 'medium' },
  { id: 26, src: '/images/rooms-hero.jpg', alt: 'Hotel Rooms Wing', category: 'Hotel', size: 'small' },
]

const categories = ['All', 'Rooms', 'Dining', 'Facilities', 'Hotel']

export default function Gallery() {
  useReveal()
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeCategory === 'All' ? galleryItems : galleryItems.filter(g => g.category === activeCategory)

  const openLightbox = (item) => setLightbox(item)
  const closeLightbox = () => setLightbox(null)
  const nextImage = () => {
    const idx = filtered.findIndex(g => g.id === lightbox.id)
    setLightbox(filtered[(idx + 1) % filtered.length])
  }
  const prevImage = () => {
    const idx = filtered.findIndex(g => g.id === lightbox.id)
    setLightbox(filtered[(idx - 1 + filtered.length) % filtered.length])
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/gallery-hero.jpg" alt="Annan's Hotel gallery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-14 w-full">
          <div className="section-label text-gold mb-3">Visual Journey</div>
          <h1 className="font-serif text-4xl md:text-6xl text-white font-400">Gallery</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-cream-DEFAULT border-b border-cream-dark py-4 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto font-body text-sm text-charcoal-light">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2 text-gold">/</span>
          <span>Gallery</span>
        </div>
      </div>

      {/* Filters */}
      <section className="py-12 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap gap-3 justify-center mb-2">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`font-body text-xs px-6 py-3 border transition-all duration-300 ${activeCategory === c ? 'bg-gold border-gold text-charcoal-dark' : 'border-charcoal/20 text-charcoal-light hover:border-gold hover:text-gold'}`}
            >
              {c}
            </button>
          ))}
        </div>
        <p className="text-center font-body text-xs text-charcoal-light mt-4">{filtered.length} photos</p>
      </section>

      {/* Masonry-style grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="break-inside-avoid group relative overflow-hidden cursor-pointer reveal"
              style={{transitionDelay:`${(i % 8) * 0.07}s`}}
              onClick={() => openLightbox(item)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{
                  height: item.size === 'large' ? '380px' : item.size === 'medium' ? '260px' : '200px',
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-400 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="white" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </div>
              </div>
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-body text-xs text-white">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-gold transition-colors"
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage() }}
            className="absolute left-6 text-white/70 hover:text-gold transition-colors"
          >
            <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <div className="max-w-5xl max-h-[85vh] px-16" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} className="max-w-full max-h-[80vh] object-contain mx-auto" />
            <p className="text-center font-body text-sm text-white/60 mt-4">{lightbox.alt}</p>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage() }}
            className="absolute right-6 text-white/70 hover:text-gold transition-colors"
          >
            <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
