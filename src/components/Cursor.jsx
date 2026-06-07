import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const sparklesRef = useRef([])
  const mousePos = useRef({ x: -100, y: -100 })
  const lastSparkle = useRef(0)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const moveCursor = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'

      // Throttle sparkles
      const now = Date.now()
      if (now - lastSparkle.current > 40) {
        createSparkle(e.clientX, e.clientY)
        lastSparkle.current = now
      }
    }

    document.addEventListener('mousemove', moveCursor)
    return () => document.removeEventListener('mousemove', moveCursor)
  }, [])

  const createSparkle = (x, y) => {
    const sparkle = document.createElement('div')
    const size = Math.random() * 8 + 4
    const offsetX = (Math.random() - 0.5) * 20
    const offsetY = (Math.random() - 0.5) * 20
    const colors = ['#C9A84C', '#E8D5A3', '#FFD700', '#A67C30', '#F5C842']
    const color = colors[Math.floor(Math.random() * colors.length)]
    const duration = Math.random() * 400 + 300

    sparkle.style.cssText = `
      position: fixed;
      pointer-events: none;
      z-index: 99997;
      left: ${x + offsetX}px;
      top: ${y + offsetY}px;
      width: ${size}px;
      height: ${size}px;
      transform: translate(-50%, -50%);
      animation: sparkle-fade ${duration}ms ease forwards;
    `

    // Alternate between circle dots and tiny stars
    if (Math.random() > 0.5) {
      sparkle.style.borderRadius = '50%'
      sparkle.style.background = color
    } else {
      // tiny star SVG
      sparkle.innerHTML = `<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
        <polygon points="5,0 6.2,3.8 10,3.8 7,6.2 8.1,10 5,7.8 1.9,10 3,6.2 0,3.8 3.8,3.8" fill="${color}"/>
      </svg>`
      sparkle.style.background = 'none'
    }

    document.body.appendChild(sparkle)
    setTimeout(() => sparkle.remove(), duration)
  }

  return (
    <div
      ref={cursorRef}
      id="cursor-star"
      style={{ position: 'fixed', pointerEvents: 'none', zIndex: 99999, transform: 'translate(-50%, -50%)', transition: 'left 0.05s linear, top 0.05s linear' }}
    >
      <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" width="30" height="30">
        <defs>
          <radialGradient id="starGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="60%" stopColor="#C9A84C" />
            <stop offset="100%" stopColor="#A67C30" />
          </radialGradient>
          <filter id="starGlow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <polygon
          points="15,1 18.5,11 29,11 20.5,17.5 23.5,28 15,22 6.5,28 9.5,17.5 1,11 11.5,11"
          fill="url(#starGrad)"
          filter="url(#starGlow)"
          stroke="#A67C30"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  )
}
