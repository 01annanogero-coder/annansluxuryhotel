import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const facilities = [
  {
    id: 1,
    title: 'Infinity Pool',
    subtitle: 'Rooftop Aquatic Sanctuary',
    description: 'Perched at the summit of Darwin\'s Hotel, our rooftop infinity pool offers an unbroken panorama of Nairobi\'s skyline. Heated year-round, it is the perfect retreat whether at dawn or under the stars. Complimentary towels, sun loungers, and poolside service are always at hand.',
    features: ['Heated year-round', 'Panoramic city views', 'Poolside bar service', 'Sun loungers & cabanas', 'Night swimming available', 'Children\'s pool adjacent'],
    image: '/images/facility-pool.jpg',
    image2: '/images/facility-pool-2.jpg',
    hours: 'Open daily 06:00 – 22:00',
  },
  {
    id: 2,
    title: 'Spa & Wellness',
    subtitle: 'A Sanctuary of Restoration',
    description: 'Our full-service spa draws on ancient East African wellness traditions, reimagined through contemporary luxury. A dedicated team of therapists offers a curated menu of treatments — from Kenyan black soap rituals to deep-tissue massage and holistic energy therapies.',
    features: ['12 private treatment suites', 'Couples spa packages', 'Steam room & sauna', 'Hydrotherapy pool', 'Organic product lines', 'Pre-natal treatments'],
    image: '/images/facility-spa.jpg',
    image2: '/images/facility-spa-2.jpg',
    hours: 'Open daily 07:00 – 21:00',
  },
  {
    id: 3,
    title: 'Fitness Centre',
    subtitle: 'State-of-the-Art Training',
    description: 'A meticulously equipped fitness centre spanning over 400m², featuring the latest cardiovascular and strength equipment, alongside a dedicated yoga and Pilates studio. Personal training sessions can be arranged through our wellness concierge.',
    features: ['400m² floor area', 'Cardiovascular zone', 'Free weights & machines', 'Yoga & Pilates studio', 'Personal training on request', 'Fitness assessments'],
    image: '/images/facility-gym.jpg',
    image2: '/images/facility-gym-2.jpg',
    hours: 'Open 24 hours',
  },
  {
    id: 4,
    title: 'Executive Lounge',
    subtitle: 'Exclusive Privileges',
    description: 'Available to Executive Suite and Presidential Suite guests, our private lounge offers a curated daily experience: complimentary breakfast, afternoon tea service, evening cocktails, and a dedicated butler. A quiet, sophisticated retreat above the city.',
    features: ['Daily breakfast service', 'Afternoon tea', 'Evening cocktails & canapés', 'Dedicated concierge', 'Private meeting nook', 'Complimentary minibar'],
    image: '/images/facility-lounge.jpg',
    image2: '/images/facility-lounge-2.jpg',
    hours: 'Open daily 06:30 – 23:00',
  },
  {
    id: 5,
    title: 'Event & Conference Spaces',
    subtitle: 'Where Occasions Become Memories',
    description: 'From intimate boardroom meetings to grand ballroom galas, Darwin\'s offers versatile event spaces accommodating 10 to 500 guests. Our dedicated events team handles every detail — AV technology, bespoke catering, florals, and beyond.',
    features: ['Ballroom: 500 guests', '4 boardrooms', 'Full AV & conferencing', 'Bespoke catering menus', 'Dedicated events manager', 'Bridal suite on-site'],
    image: '/images/facility-events.jpg',
    image2: '/images/facility-events-2.jpg',
    hours: 'By appointment',
  },
  {
    id: 6,
    title: 'Manicured Gardens',
    subtitle: 'A Green Oasis in the City',
    description: 'Step into our lush, immaculately maintained gardens — a rare green sanctuary in the heart of Nairobi. Featuring curated indigenous plantings, quiet walkways, a resident garden bar, and intimate seating alcoves ideal for private conversations.',
    features: ['Indigenous Kenyan flora', 'Shaded walking paths', 'Garden bar', 'Private seating alcoves', 'Event-ready lawns', 'Bird sanctuary'],
    image: '/images/facility-garden.jpg',
    image2: '/images/facility-garden-2.jpg',
    hours: 'Open daily 06:00 – 20:00',
  },
]

const additionalAmenities = [
  'High-Speed WiFi throughout property',
  'Valet & Parking',
  'Airport Transfer (luxury vehicle)',
  '24hr Room Service',
  'Laundry & Dry Cleaning',
  'Currency Exchange',
  'Tour & Safari Desk',
  'Gift Shop & Boutique',
  'Medical Assistance on call',
  'Business Centre',
  'Library & Reading Room',
  'Children\'s Play Area',
]

export default function Facilities() {
  useReveal()

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 md:h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/facility-pool.jpg" alt="Darwin's Hotel facilities" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-14 w-full">
          <div className="section-label text-gold mb-3">World-Class Amenities</div>
          <h1 className="font-serif text-4xl md:text-6xl text-white font-400">Facilities</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-cream-DEFAULT border-b border-cream-dark py-4 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto font-body text-sm text-charcoal-light">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2 text-gold">/</span>
          <span>Facilities</span>
        </div>
      </div>

      {/* Intro */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-2xl mx-auto reveal">
          <div className="section-label mb-4">Everything You Need</div>
          <h2 className="font-serif text-3xl md:text-5xl font-400 mb-6">Beyond the Room,<br/><span className="italic text-gold">A World Awaits</span></h2>
          <div className="gold-divider mb-6" />
          <p className="font-body text-charcoal-light leading-relaxed">
            At Darwin's, luxury extends far beyond your suite. Our world-class facilities have been designed to serve every dimension of your stay — from invigorating mornings in the fitness centre to tranquil evenings at the spa.
          </p>
        </div>
      </section>

      {/* Facilities detail sections */}
      {facilities.map((f, i) => (
        <section key={f.id} className={`py-0 ${i % 2 === 0 ? '' : 'bg-cream-DEFAULT'}`}>
          <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-[480px]`}>
            <div className={`img-hover ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <img src={f.image} alt={f.title} className="w-full h-full object-cover min-h-[350px]" />
            </div>
            <div className={`flex items-center px-10 lg:px-16 py-16 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <div className="reveal">
                <div className="section-label text-gold mb-3">{f.subtitle}</div>
                <h2 className="font-serif text-3xl md:text-4xl font-400 mb-4">{f.title}</h2>
                <div className="w-12 h-px bg-gold mb-7" />
                <p className="font-body text-charcoal-light leading-relaxed mb-7">{f.description}</p>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-7">
                  {f.features.map((feat, fi) => (
                    <div key={fi} className="flex items-center gap-2 font-body text-sm text-charcoal-light">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                      {feat}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 font-body text-xs text-charcoal-light border-t border-cream-dark pt-5">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#C9A84C" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  {f.hours}
                </div>
              </div>
            </div>
          </div>
          {/* Second image strip */}
          <div className="h-52 md:h-72 overflow-hidden img-hover">
            <img src={f.image2} alt={f.title + ' detail'} className="w-full h-full object-cover" />
          </div>
        </section>
      ))}

      {/* Additional amenities */}
      <section className="py-24 bg-charcoal-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 reveal">
            <div className="section-label text-gold mb-4">And Much More</div>
            <h2 className="font-serif text-3xl md:text-4xl text-white font-400">Additional Services</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {additionalAmenities.map((a, i) => (
              <div key={i} className="flex items-center gap-3 reveal" style={{transitionDelay:`${i*0.05}s`}}>
                <div className="w-8 h-8 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#C9A84C" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <span className="font-body text-sm text-white/70">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-DEFAULT py-20 text-center">
        <div className="max-w-xl mx-auto px-6 reveal">
          <div className="section-label mb-4">Plan Your Visit</div>
          <h3 className="font-serif text-3xl font-400 mb-6">Experience Darwin's in Full</h3>
          <div className="gold-divider mb-8" />
          <p className="font-body text-charcoal-light mb-10">From the pool to the spa to the table — let us curate a bespoke day itinerary just for you.</p>
          <Link to="/contact" className="btn-gold">Contact Our Concierge</Link>
        </div>
      </section>
    </div>
  )
}
