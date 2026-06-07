import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import roomsData from '../data/roomsData.json'

export default function Rooms() {
  useReveal()
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [filter, setFilter] = useState('All')

  const filters = ['All', 'City View', 'Garden View', 'Pool View', 'Panoramic City View', '360° Nairobi Panorama']
  const unique = ['All', ...new Set(roomsData.map(r => r.view))]

  const filtered = filter === 'All' ? roomsData : roomsData.filter(r => r.view === filter)

  return (
    <div>
      {/* Page hero */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/rooms-hero.jpg" alt="Darwin's Hotel rooms" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-12 w-full">
          <div className="section-label text-gold mb-3">Our Collection</div>
          <h1 className="font-serif text-4xl md:text-6xl text-white font-400">Rooms & Suites</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-cream-DEFAULT border-b border-cream-dark py-4 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto font-body text-sm text-charcoal-light">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2 text-gold">/</span>
          <span>Rooms & Suites</span>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl reveal">
          <div className="section-label mb-4">Curated Accommodations</div>
          <h2 className="font-serif text-3xl md:text-4xl font-400 mb-4">Six Categories, One Standard — Perfection</h2>
          <div className="gold-divider mb-6" style={{margin:'0 0 1.5rem'}} />
          <p className="font-body text-charcoal-light leading-relaxed">
            From our welcoming Classic Room to the grandeur of the Presidential Suite, each space at Darwin's is a private world. Warm materials, refined furnishings, and immaculate service are constants — the scale simply grows with your ambition.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-8">
        <div className="flex flex-wrap gap-3">
          {unique.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-body text-xs px-5 py-2.5 border transition-all duration-300 ${filter === f ? 'bg-gold border-gold text-charcoal-dark' : 'border-charcoal/20 text-charcoal-light hover:border-gold hover:text-gold'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Rooms grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filtered.map((room, i) => (
            <div key={room.id} className="bg-white group shadow-sm hover:shadow-xl transition-shadow duration-500" style={{transitionDelay:`${i*0.1}s`}}>
              <div className="img-hover overflow-hidden relative aspect-[4/3]">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                {room.id === 5 && (
                  <div className="absolute top-4 left-4 bg-gold text-charcoal-dark font-body text-xs px-3 py-1 font-600">
                    Most Exclusive
                  </div>
                )}
              </div>
              <div className="p-7">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="section-label text-gold mb-1">{room.view}</div>
                    <h3 className="font-serif text-2xl font-400">{room.name}</h3>
                  </div>
                  <div className="text-right">
                    <div className="font-serif text-2xl text-gold">KES {room.price.toLocaleString()}</div>
                    <div className="font-body text-xs text-charcoal-light">per night</div>
                  </div>
                </div>
                <p className="font-body text-sm text-charcoal-light leading-relaxed mb-5 line-clamp-2">{room.description}</p>

                {/* Specs */}
                <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 border-t border-cream-dark pt-5">
                  {[
                    { icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z', label: room.size },
                    { icon: 'M3 9h18M9 21V9m6 12V9M3 15h18', label: room.bed },
                    { icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z', label: room.capacity },
                  ].map((s, si) => (
                    <span key={si} className="flex items-center gap-1.5 font-body text-xs text-charcoal-light">
                      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#C9A84C" strokeWidth="2">
                        <path d={s.icon}/>
                      </svg>
                      {s.label}
                    </span>
                  ))}
                  <span className="flex items-center gap-1.5 font-body text-xs text-charcoal-light">
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#C9A84C" strokeWidth="2"><path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
                    {room.breakfast ? 'Breakfast incl.' : 'Room only'}
                  </span>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedRoom(room)}
                    className="flex-1 btn-outline-gold text-center text-xs py-3"
                  >
                    View Details
                  </button>
                  <Link to="/contact" className="flex-1 btn-gold text-center text-xs py-3">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Room detail modal */}
      {selectedRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8" onClick={() => setSelectedRoom(null)}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div
            className="relative bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedRoom(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-charcoal-dark text-white flex items-center justify-center hover:bg-gold transition-colors"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <div className="aspect-[16/7] overflow-hidden">
              <img src={selectedRoom.image} alt={selectedRoom.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <div className="section-label text-gold mb-2">{selectedRoom.tagline}</div>
              <h2 className="font-serif text-3xl font-400 mb-2">{selectedRoom.name}</h2>
              <div className="font-serif text-2xl text-gold mb-6">KES {selectedRoom.price.toLocaleString()} <span className="font-body text-sm text-charcoal-light">/ night</span></div>
              <p className="font-body text-charcoal-light leading-relaxed mb-8">{selectedRoom.description}</p>
              <h4 className="section-label mb-4">Room Amenities</h4>
              <div className="grid grid-cols-2 gap-2 mb-8">
                {selectedRoom.amenities.map((a, i) => (
                  <div key={i} className="flex items-center gap-2 font-body text-sm text-charcoal-light">
                    <div className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />
                    {a}
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-gold block text-center" onClick={() => setSelectedRoom(null)}>
                Reserve This Room
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="bg-cream-DEFAULT py-16 text-center">
        <div className="max-w-xl mx-auto px-6 reveal">
          <div className="section-label mb-4">Need Assistance?</div>
          <h3 className="font-serif text-3xl font-400 mb-4">Let Our Concierge Guide You</h3>
          <p className="font-body text-charcoal-light mb-8">Not sure which room fits best? Our team is on hand 24/7 to help you find your perfect stay.</p>
          <a href="tel:+254743596965" className="btn-gold">Call +254 743 596 965</a>
        </div>
      </section>
    </div>
  )
}
