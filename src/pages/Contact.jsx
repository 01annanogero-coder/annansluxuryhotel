import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import emailjs from '@emailjs/browser'

const socials = [
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61589456675954', color: '#1877F2', icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg> },
  { name: 'Instagram', href: 'https://www.instagram.com/zygoatfans?igsh=d3U3ZDU4YzRhNmNx', color: '#E1306C', icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg> },
  { name: 'X (Twitter)', href: 'https://x.com/ogero9258', color: '#000000', icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { name: 'YouTube', href: 'https://youtube.com/@annanogero?si=IOK8FFGETl2X4Be1', color: '#FF0000', icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg> },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/annan-ogero-3553473a7?utm_source=share_via&utm_content=profile&utm_medium=member_android', color: '#0A66C2', icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
]

export default function Contact() {
  useReveal()
  const formRef = useRef()
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    subject: '',
    check_in: '',
    check_out: '',
    guests: '1',
    room_type: '',
    message: '',
  })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(
        'service_e7zmk4c',      // Replace with client's EmailJS Service ID
        'template_tuewtrk',     // Replace with client's EmailJS Template ID
        formRef.current,
        'e-5Va92UtqyaLELK_'       // Replace with client's EmailJS Public Key
      )
      setStatus('success')
      setFormData({ from_name:'', from_email:'', phone:'', subject:'', check_in:'', check_out:'', guests:'1', room_type:'', message:'' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/contact-hero.jpg" alt="Annan's Hotel contact" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-14 w-full">
          <div className="section-label text-gold mb-3">We'd Love to Hear from You</div>
          <h1 className="font-serif text-4xl md:text-6xl text-white font-400">Contact & Reserve</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-cream-DEFAULT border-b border-cream-dark py-4 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto font-body text-sm text-charcoal-light">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2 text-gold">/</span>
          <span>Contact</span>
        </div>
      </div>

      {/* Contact info + form */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Left: Info */}
          <div className="reveal-left">
            <div className="section-label mb-4">Get In Touch</div>
            <h2 className="font-serif text-3xl md:text-4xl font-400 mb-6">
              Your Stay Begins<br/>
              <span className="italic text-gold">With a Conversation</span>
            </h2>
            <div className="w-12 h-px bg-gold mb-10" />

            {/* Contact details */}
            <div className="space-y-8 mb-12">
              {[
                {
                  icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#C9A84C" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 7.18 2 2 0 015 5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 12a16 16 0 006.91 6.91l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
                  label: 'Phone / WhatsApp',
                  value: '+254 143 276 663',
                  href: 'tel:+254143276663',
                },
                {
                  icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#C9A84C" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                  label: 'Email',
                  value: 'annanogero@gmail.com',
                  href: 'mailto:annanogero@gmail.com',
                },
                {
                  icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#C9A84C" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                  label: 'Location',
                  value: 'Nairobi, Kenya',
                  href: null,
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="w-12 h-12 border border-gold/30 flex items-center justify-center flex-shrink-0 bg-cream-DEFAULT">
                    {item.icon}
                  </div>
                  <div>
                    <div className="section-label mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="font-body text-charcoal hover:text-gold transition-colors">{item.value}</a>
                    ) : (
                      <p className="font-body text-charcoal">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social media */}
            <div className="mb-12">
              <div className="section-label mb-5">Follow Annan's</div>
              <div className="flex flex-wrap gap-3">
                {socials.map(s => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-charcoal/15 px-4 py-2.5 hover:border-gold hover:text-gold transition-all duration-300 font-body text-sm text-charcoal-light"
                    title={s.name}
                  >
                    {s.icon}
                    {s.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Owner / Manager card */}
            <div className="border border-gold/20 p-6 bg-cream-DEFAULT">
              <div className="section-label mb-4">Meet the Team</div>
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 overflow-hidden border-2 border-gold/30 flex-shrink-0">
                  <img src="/images/owner-photo.jpg" alt="Annan's Hotel Manager" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-400 mb-1">The Management</h4>
                  <p className="font-body text-sm text-charcoal-light leading-relaxed">
                    Our dedicated team is passionate about crafting extraordinary guest experiences. We look forward to welcoming you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal-right">
            <div className="section-label mb-4">Reservation Enquiry</div>
            <h3 className="font-serif text-2xl font-400 mb-8">Send Us a Message</h3>

            {status === 'success' && (
              <div className="bg-gold/10 border border-gold/30 p-5 mb-8 text-center">
                <div className="font-serif text-lg text-gold mb-2">Message Received</div>
                <p className="font-body text-sm text-charcoal-light">Thank you for reaching out. Our team will respond within 24 hours.</p>
              </div>
            )}
            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 p-5 mb-8 text-center">
                <p className="font-body text-sm text-red-600">Something went wrong. Please try again or call us directly.</p>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="section-label block mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full border border-cream-dark bg-cream-light px-4 py-3 font-body text-sm text-charcoal focus:outline-none focus:border-gold transition-colors placeholder:text-charcoal-light/50"
                  />
                </div>
                <div>
                  <label className="section-label block mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full border border-cream-dark bg-cream-light px-4 py-3 font-body text-sm text-charcoal focus:outline-none focus:border-gold transition-colors placeholder:text-charcoal-light/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="section-label block mb-2">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254 700 000 000"
                    className="w-full border border-cream-dark bg-cream-light px-4 py-3 font-body text-sm text-charcoal focus:outline-none focus:border-gold transition-colors placeholder:text-charcoal-light/50"
                  />
                </div>
                <div>
                  <label className="section-label block mb-2">Number of Guests</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full border border-cream-dark bg-cream-light px-4 py-3 font-body text-sm text-charcoal focus:outline-none focus:border-gold transition-colors"
                  >
                    {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                    <option value="7+">7+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="section-label block mb-2">Check-In Date</label>
                  <input
                    type="date"
                    name="check_in"
                    value={formData.check_in}
                    onChange={handleChange}
                    className="w-full border border-cream-dark bg-cream-light px-4 py-3 font-body text-sm text-charcoal focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="section-label block mb-2">Check-Out Date</label>
                  <input
                    type="date"
                    name="check_out"
                    value={formData.check_out}
                    onChange={handleChange}
                    className="w-full border border-cream-dark bg-cream-light px-4 py-3 font-body text-sm text-charcoal focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="section-label block mb-2">Room Preference</label>
                <select
                  name="room_type"
                  value={formData.room_type}
                  onChange={handleChange}
                  className="w-full border border-cream-dark bg-cream-light px-4 py-3 font-body text-sm text-charcoal focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="">No preference</option>
                  <option>Classic Room</option>
                  <option>Deluxe Room</option>
                  <option>Premium Room</option>
                  <option>Junior Suite</option>
                  <option>Executive Suite</option>
                  <option>Presidential Suite</option>
                </select>
              </div>

              <div>
                <label className="section-label block mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your stay, special requests, or any questions..."
                  className="w-full border border-cream-dark bg-cream-light px-4 py-3 font-body text-sm text-charcoal focus:outline-none focus:border-gold transition-colors resize-none placeholder:text-charcoal-light/50"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-gold w-full disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending...' : 'Send Enquiry'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-0">
        <div className="bg-cream-DEFAULT border-t border-gold/10 py-12 text-center">
          <div className="section-label mb-3">Find Us</div>
          <h3 className="font-serif text-3xl font-400 mb-2">Our Location</h3>
          <p className="font-body text-charcoal-light text-sm mb-8">Nairobi, Kenya</p>
        </div>
        <div className="relative">
          {/* Map image from client */}
          <img
            src="/images/google-map.png"
            alt="Annan's Hotel location map, Nairobi Kenya"
            className="w-full h-96 md:h-[500px] object-cover"
          />
          {/* Map overlay card */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white p-6 shadow-2xl border-t-2 border-gold w-80">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-gold flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <div className="font-serif text-sm font-500">Annan's Luxury Hotel</div>
                <div className="font-body text-xs text-charcoal-light">5.0 ★ · 5-Star Hotel</div>
              </div>
            </div>
            <div className="font-body text-xs text-charcoal-light border-t border-cream-dark pt-3 mb-4">
              Nairobi, Kenya
            </div>
            <a
              href="https://maps.google.com/?q=Annans+Hotel+Nairobi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-xs block text-center py-2.5"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Bottom info */}
      <section className="bg-cream-DEFAULT py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { label: 'Check-In', value: '14:00 EAT', sub: 'Early check-in on request' },
              { label: 'Check-Out', value: '12:00 EAT', sub: 'Late check-out available' },
              { label: 'Concierge', value: '24 / 7', sub: 'Always at your service' },
            ].map((item, i) => (
              <div key={i} className="reveal" style={{transitionDelay:`${i*0.1}s`}}>
                <div className="section-label mb-2">{item.label}</div>
                <div className="font-serif text-3xl text-gold mb-1">{item.value}</div>
                <div className="font-body text-xs text-charcoal-light">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
