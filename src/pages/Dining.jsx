import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import diningData from '../data/diningData.json'

const categories = ['All', 'Starters', 'Mains', 'Desserts', 'Breakfast']

export default function Dining() {
  useReveal()
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? diningData.featuredDishes
    : diningData.featuredDishes.filter(d => d.category === activeCategory)

  return (
    <div>
      {/* Page hero */}
      <section className="relative h-72 md:h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/dining-hero.jpg" alt="Darwin's fine dining" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-14 w-full">
          <div className="section-label text-gold mb-3">Culinary Experiences</div>
          <h1 className="font-serif text-4xl md:text-6xl text-white font-400">Dining & Cuisine</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-cream-DEFAULT border-b border-cream-dark py-4 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto font-body text-sm text-charcoal-light">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2 text-gold">/</span>
          <span>Dining</span>
        </div>
      </div>

      {/* Intro */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-2xl mx-auto reveal">
          <div className="section-label mb-4">A Table Above All Others</div>
          <h2 className="font-serif text-3xl md:text-5xl font-400 mb-6">Three Venues,<br/><span className="italic text-gold">One Passion</span></h2>
          <div className="gold-divider mb-6" />
          <p className="font-body text-charcoal-light leading-relaxed">
            From the theatre of our flagship restaurant to the languid pleasures of poolside dining, every culinary experience at Darwin's is crafted to be remembered. Locally sourced, globally inspired, and always extraordinary.
          </p>
        </div>
      </section>

      {/* Restaurants */}
      {diningData.restaurants.map((r, i) => (
        <section key={r.id} className={`py-0 ${i % 2 === 0 ? 'bg-white' : 'bg-cream-DEFAULT'}`}>
          <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-[500px] ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className={`img-hover ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <img src={r.image} alt={r.name} className="w-full h-full object-cover min-h-[350px]" />
            </div>
            <div className={`flex items-center px-10 lg:px-16 py-16 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <div className="reveal">
                <div className="section-label text-gold mb-4">{r.type}</div>
                <h2 className="font-serif text-3xl md:text-4xl font-400 mb-6">{r.name}</h2>
                <div className="w-12 h-px bg-gold mb-8" />
                <p className="font-body text-charcoal-light leading-relaxed mb-8">{r.description}</p>
                <div className="space-y-3 mb-10">
                  <div className="flex items-start gap-3 font-body text-sm text-charcoal-light">
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#C9A84C" strokeWidth="2" className="mt-0.5 flex-shrink-0">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <span>{r.hours}</span>
                  </div>
                  <div className="flex items-start gap-3 font-body text-sm text-charcoal-light">
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#C9A84C" strokeWidth="2" className="mt-0.5 flex-shrink-0">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                    </svg>
                    <span>Dress code: {r.dress}</span>
                  </div>
                </div>
                <Link to="/contact" className="btn-gold">
                  {r.reservation ? 'Reserve a Table' : 'Visit Us'}
                </Link>
              </div>
            </div>
          </div>
          {/* Second image */}
          <div className="grid grid-cols-3 gap-0 h-48 md:h-64">
            <img src={r.image2} alt={r.name} className="w-full h-full object-cover col-span-2" />
            <div className="bg-charcoal-dark flex items-center justify-center p-8">
              <div className="text-center">
                <div className="font-serif text-4xl text-gold mb-1">{r.id === 1 ? '★' : r.id === 2 ? '◆' : '☀'}</div>
                <div className="font-body text-xs text-white/60 uppercase tracking-widest">{r.type}</div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Featured Dishes */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14 reveal">
          <div className="section-label mb-4">Signature Dishes</div>
          <h2 className="font-serif text-4xl md:text-5xl font-400 mb-4">From Our Kitchen</h2>
          <div className="gold-divider mb-8" />
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`font-body text-xs px-5 py-2.5 border transition-all duration-300 ${activeCategory === c ? 'bg-gold border-gold text-charcoal-dark' : 'border-charcoal/20 text-charcoal-light hover:border-gold hover:text-gold'}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((dish, i) => (
            <div key={dish.name} className="group reveal" style={{transitionDelay:`${i*0.1}s`}}>
              <div className="img-hover overflow-hidden aspect-[4/3] mb-5">
                <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
              </div>
              <div className="section-label text-gold mb-2">{dish.category}</div>
              <h4 className="font-serif text-xl font-400 mb-2">{dish.name}</h4>
              <p className="font-body text-sm text-charcoal-light">{dish.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="bg-charcoal-dark py-20 text-center">
        <div className="max-w-xl mx-auto px-6 reveal">
          <div className="section-label text-gold mb-6">Reserve Your Experience</div>
          <h3 className="font-serif text-3xl md:text-4xl text-white font-400 mb-6">
            A Table Awaits at<br/><span className="italic text-gold">Savanna & Co.</span>
          </h3>
          <p className="font-body text-white/60 mb-10">For reservations, dietary requirements, or private dining enquiries, our team is ready to assist.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-gold">Make a Reservation</Link>
            <a href="tel:+254743596965" className="btn-outline-gold" style={{borderColor:'rgba(255,255,255,0.3)', color:'white'}}>
              +254 743 596 965
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
