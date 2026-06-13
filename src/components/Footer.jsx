import { Link } from 'react-router-dom'

const socials = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61589456675954',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/zygoatfans?igsh=d3U3ZDU4YzRhNmNx',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com/ogero9258',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@annanogero?si=IOK8FFGETl2X4Be1',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/annan-ogero-3553473a7?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
]

const footerLinks = {
  'Explore': [
    { label: 'Rooms & Suites', path: '/rooms' },
    { label: 'Dining', path: '/dining' },
    { label: 'Facilities', path: '/facilities' },
    { label: 'Gallery', path: '/gallery' },
  ],
  'Guest Services': [
    { label: 'Reservations', path: '/contact' },
    { label: 'Airport Transfer', path: '/contact' },
    { label: 'Concierge', path: '/contact' },
    { label: 'Events & Meetings', path: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark text-white/80">
      {/* Top gold bar */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <svg viewBox="0 0 44 44" width="32" height="32">
                <circle cx="22" cy="22" r="20" fill="none" stroke="#C9A84C" strokeWidth="1"/>
                <polygon points="22,6 25.5,16 36,16 27.5,22.5 30.5,33 22,27 13.5,33 16.5,22.5 8,16 18.5,16" fill="#C9A84C"/>
              </svg>
              <div>
                <div className="font-serif text-lg tracking-widest text-white">ANNAN'S</div>
                <div className="section-label" style={{fontSize:'0.5rem', letterSpacing:'0.3em'}}>LUXURY HOTEL</div>
              </div>
            </div>
            <p className="font-body text-sm text-white/60 leading-relaxed mb-6">
              A sanctuary of refined luxury in the heart of Nairobi, Kenya. Where every detail is crafted for those who expect nothing less than extraordinary.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-4">
              {socials.map(s => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-all duration-300"
                  title={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="section-label text-gold mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map(l => (
                  <li key={l.label}>
                    <Link
                      to={l.path}
                      className="font-body text-sm text-white/60 hover:text-gold transition-colors duration-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact info */}
          <div>
            <h4 className="section-label text-gold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#C9A84C" strokeWidth="2" className="mt-0.5 flex-shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="font-body text-sm text-white/60">Nairobi, Kenya</span>
              </li>
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#C9A84C" strokeWidth="2" className="mt-0.5 flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 7.18 2 2 0 015 5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 12a16 16 0 006.91 6.91l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <span className="font-body text-sm text-white/60">+254 743 596 965</span>
              </li>
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#C9A84C" strokeWidth="2" className="mt-0.5 flex-shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span className="font-body text-sm text-white/60">annanogero@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/40">
            © {new Date().getFullYear()} Annan's Luxury Hotel. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/30">
            Nairobi, Kenya · +254 143 276 663 · annanogero@gmail.com
          </p>
        </div>
      </div>
    </footer>
  )
}
