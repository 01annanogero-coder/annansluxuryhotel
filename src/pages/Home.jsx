import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import roomsData from '../data/roomsData.json'

const stats = [
  { value: '5★', label: 'Star Rating' },
  { value: '512+', label: 'Guest Reviews' },
  { value: '5.0', label: 'Google Score' },
  { value: '24/7', label: 'Concierge' },
]

const amenities = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Luxury Suites',
    desc: 'Six categories of meticulously designed rooms, each a private sanctuary.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
    title: 'Fine Dining',
    desc: 'Three distinct culinary destinations celebrating East African flavours.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Spa & Wellness',
    desc: 'A holistic retreat offering curated therapies and restorative treatments.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
    title: 'Infinity Pool',
    desc: 'A breathtaking rooftop pool with panoramic views of Nairobi.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Business Centre',
    desc: 'State-of-the-art meeting rooms and event spaces for every occasion.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: '24hr Concierge',
    desc: 'A dedicated team anticipating every need, around the clock.',
  },
]

const testimonials = [
  {
    quote: "Annan's Hotel is in a class of its own. The attention to detail, the staff, the food — an experience I will never forget.",
    name: 'Amara O.',
    location: 'Lagos, Nigeria',
    stars: 5,
  },
  {
    quote: "Stayed in the Presidential Suite for our anniversary. From the flowers to the butler, every moment felt extraordinarily personal.",
    name: 'James & Sarah K.',
    location: 'London, UK',
    stars: 5,
  },
  {
    quote: "The finest hotel I have encountered in East Africa. Savanna & Co. alone is worth the trip to Nairobi.",
    name: 'Dr. Mohamed A.',
    location: 'Dubai, UAE',
    stars: 5,
  },
]

export default function Home() {
  useReveal()
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const featuredRooms = roomsData.slice(0, 3)

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-building.jpg"
            alt="Annan's Hotel Nairobi exterior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto" style={{marginTop: '-60px'}}>
          <div className="section-label text-gold mb-6 animate-fade-in">Nairobi, Kenya</div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-400 leading-tight mb-6 animate-fade-in" style={{animationDelay:'0.2s', opacity:0, animationFillMode:'forwards'}}>
            Annan's<br/>
            <span className="italic text-gold">Luxury</span> Hotel
          </h1>
          <div className="gold-divider mb-6" />
          <p className="font-body text-white/80 text-lg md:text-xl font-300 mb-10 max-w-xl mx-auto animate-fade-in" style={{animationDelay:'0.5s', opacity:0, animationFillMode:'forwards'}}>
            Where Nairobi's heartbeat meets timeless elegance. A sanctuary crafted for those who demand the extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay:'0.7s', opacity:0, animationFillMode:'forwards'}}>
            <Link to="/rooms" className="btn-gold">Explore Rooms</Link>
            <Link to="/contact" className="btn-outline-gold" style={{borderColor:'rgba(255,255,255,0.6)', color:'white'}}>Reserve a Stay</Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
          <span className="section-label" style={{fontSize:'0.55rem'}}>Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ===== BOOKING BAR ===== */}
      <section className="bg-white shadow-lg border-b border-gold/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <div>
              <label className="section-label block mb-2">Check In</label>
              <input type="date" className="w-full border border-cream-dark bg-cream-light px-4 py-3 font-body text-sm text-charcoal focus:outline-none focus:border-gold transition-colors" />
            </div>
            <div>
              <label className="section-label block mb-2">Check Out</label>
              <input type="date" className="w-full border border-cream-dark bg-cream-light px-4 py-3 font-body text-sm text-charcoal focus:outline-none focus:border-gold transition-colors" />
            </div>
            <div>
              <label className="section-label block mb-2">Guests</label>
              <select className="w-full border border-cream-dark bg-cream-light px-4 py-3 font-body text-sm text-charcoal focus:outline-none focus:border-gold transition-colors">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
            </div>
            <div>
              <Link to="/rooms" className="btn-gold w-full block text-center">
                Check Availability
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="bg-cream-DEFAULT py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i} className="reveal" style={{transitionDelay: `${i * 0.1}s`}}>
                <div className="font-serif text-4xl text-gold font-600 mb-1">{s.value}</div>
                <div className="section-label text-charcoal-light">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT / INTRO ===== */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <div className="section-label mb-4">Welcome to Annan's</div>
            <h2 className="font-serif text-4xl md:text-5xl font-400 leading-tight mb-6">
              A Nairobi Icon<br/>
              <span className="italic text-gold">Reimagined</span>
            </h2>
            <div className="gold-divider mb-8" style={{margin:'0 0 2rem'}} />
            <p className="font-body text-charcoal-light leading-relaxed mb-6">
              Annan's Luxury Hotel stands as Nairobi's most celebrated address — a place where the warmth of Kenyan hospitality meets the precision of international luxury. From our breathtaking suites to our award-winning cuisine, every element has been curated with singular intention: your absolute comfort.
            </p>
            <p className="font-body text-charcoal-light leading-relaxed mb-10">
              Perfectly situated in Nairobi, Kenya, we are your gateway to the city's finest experiences — from safari adventures to boardroom meetings, all from the embrace of five-star elegance.
            </p>
            <Link to="/contact" className="btn-gold">Plan Your Visit</Link>
          </div>
          <div className="reveal-right">
            <div className="grid grid-cols-2 gap-4">
              <div className="img-hover aspect-[3/4]">
                <img src="/images/about-lobby.jpg" alt="Annan's Hotel lobby" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-4 mt-8">
                <div className="img-hover aspect-square">
                  <img src="/images/about-detail.jpg" alt="Hotel interior detail" className="w-full h-full object-cover" />
                </div>
                <div className="img-hover aspect-square">
                  <img src="/images/about-pool.jpg" alt="Annan's Hotel pool" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED ROOMS ===== */}
      <section className="py-24 bg-cream-DEFAULT">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 reveal">
            <div className="section-label mb-4">Rooms & Suites</div>
            <h2 className="font-serif text-4xl md:text-5xl font-400 mb-4">Discover Your Stay</h2>
            <div className="gold-divider mb-4" />
            <p className="font-body text-charcoal-light max-w-xl mx-auto">
              Six meticulously appointed categories — each a world of its own.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRooms.map((room, i) => (
              <div key={room.id} className="bg-white group reveal" style={{transitionDelay:`${i*0.15}s`}}>
                <div className="img-hover aspect-[4/3] overflow-hidden">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="section-label text-gold mb-2">From KES {room.price.toLocaleString()} / night</div>
                  <h3 className="font-serif text-2xl font-400 mb-2">{room.name}</h3>
                  <p className="font-body text-sm text-charcoal-light leading-relaxed mb-4 line-clamp-2">{room.description}</p>
                  <div className="flex items-center gap-4 mb-6 text-xs text-charcoal-light font-body">
                    <span className="flex items-center gap-1">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
                      {room.size}
                    </span>
                    <span>{room.bed}</span>
                    <span>{room.view}</span>
                  </div>
                  <Link to="/rooms" className="btn-outline-gold w-full block text-center text-xs">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 reveal">
            <Link to="/rooms" className="btn-gold">View All Rooms</Link>
          </div>
        </div>
      </section>

      {/* ===== AMENITIES ===== */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 reveal">
          <div className="section-label mb-4">What We Offer</div>
          <h2 className="font-serif text-4xl md:text-5xl font-400 mb-4">Facilities & Amenities</h2>
          <div className="gold-divider" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {amenities.map((a, i) => (
            <div key={i} className="flex items-start gap-5 reveal" style={{transitionDelay:`${i*0.1}s`}}>
              <div className="flex-shrink-0 w-14 h-14 border border-gold/30 flex items-center justify-center bg-cream-DEFAULT">
                {a.icon}
              </div>
              <div>
                <h4 className="font-serif text-lg mb-2">{a.title}</h4>
                <p className="font-body text-sm text-charcoal-light leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-14 reveal">
          <Link to="/facilities" className="btn-outline-gold">Explore All Facilities</Link>
        </div>
      </section>

      {/* ===== DINING TEASER ===== */}
      <section className="relative py-0 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          <div className="img-hover">
            <img src="/images/dining-hero.jpg" alt="Annan's fine dining" className="w-full h-full object-cover min-h-[400px]" />
          </div>
          <div className="bg-charcoal-dark flex items-center px-12 lg:px-20 py-20">
            <div>
              <div className="section-label text-gold mb-6">Culinary Excellence</div>
              <h2 className="font-serif text-4xl md:text-5xl text-white font-400 leading-tight mb-6">
                A Table Worth<br/>
                <span className="italic text-gold">Travelling For</span>
              </h2>
              <div className="w-12 h-px bg-gold mb-8" />
              <p className="font-body text-white/70 leading-relaxed mb-10">
                Three distinctive venues — from our flagship Savanna & Co. fine dining restaurant to the intimate Gold Bar and our open-air Poolside Terrace. Each tells a story of Kenya's rich culinary landscape through a world-class lens.
              </p>
              <Link to="/dining" className="btn-gold">Explore Dining</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== POOL / FACILITIES TEASER ===== */}
      <section className="py-24 bg-cream-DEFAULT">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 reveal">
            <div className="section-label mb-4">Beyond the Room</div>
            <h2 className="font-serif text-4xl md:text-5xl font-400 mb-4">Spaces to Savour</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: '/images/facility-pool.jpg', title: 'Infinity Pool', desc: 'Rooftop infinity pool with 360° Nairobi skyline views' },
              { img: '/images/facility-spa.jpg', title: 'Spa & Wellness', desc: 'Full-service spa with curated holistic treatments' },
              { img: '/images/facility-gym.jpg', title: 'Fitness Centre', desc: 'State-of-the-art equipment open around the clock' },
              { img: '/images/facility-lounge.jpg', title: 'Executive Lounge', desc: 'Private lounge with premium amenities for elite guests' },
              { img: '/images/facility-events.jpg', title: 'Event Spaces', desc: 'Versatile ballrooms and boardrooms for every occasion' },
              { img: '/images/facility-garden.jpg', title: 'Gardens', desc: 'Lush manicured gardens — a tranquil city escape' },
            ].map((f, i) => (
              <div key={i} className="relative group overflow-hidden img-hover reveal" style={{transitionDelay:`${i*0.1}s`}}>
                <img src={f.img} alt={f.title} className="w-full aspect-[4/3] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="font-serif text-xl text-white mb-1">{f.title}</h4>
                  <p className="font-body text-xs text-white/70">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 reveal">
            <Link to="/facilities" className="btn-gold">View All Facilities</Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/testimonial-bg.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal-dark/90" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="section-label text-gold mb-8">Guest Stories</div>
          <div className="relative min-h-[200px]">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-all duration-700"
                style={{ opacity: i === activeTestimonial ? 1 : 0, transform: `translateY(${i === activeTestimonial ? 0 : 20}px)` }}
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-8">
                  {Array(t.stars).fill(0).map((_, si) => (
                    <svg key={si} viewBox="0 0 24 24" width="18" height="18" fill="#C9A84C">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                    </svg>
                  ))}
                </div>
                <blockquote className="font-serif text-2xl md:text-3xl text-white italic font-300 leading-relaxed mb-8">
                  "{t.quote}"
                </blockquote>
                <div className="font-body text-gold text-sm">{t.name}</div>
                <div className="font-body text-white/50 text-xs mt-1">{t.location}</div>
              </div>
            ))}
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === activeTestimonial ? 'bg-gold w-8' : 'bg-white/30'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-20 bg-cream-DEFAULT text-center">
        <div className="max-w-2xl mx-auto px-6 reveal">
          <div className="section-label mb-4">Begin Your Journey</div>
          <h2 className="font-serif text-4xl md:text-5xl font-400 mb-6">
            Ready to Experience<br/>
            <span className="italic text-gold">Annan's?</span>
          </h2>
          <div className="gold-divider mb-8" />
          <p className="font-body text-charcoal-light mb-10">
            Our concierge team is available around the clock to craft a stay tailored precisely to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-gold">Make a Reservation</Link>
            <a href="tel:+254143276663" className="btn-outline-gold">Call Us Now</a>
          </div>
        </div>
      </section>
    </div>
  )
}
