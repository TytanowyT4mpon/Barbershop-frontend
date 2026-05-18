import React from 'react'

const SvgSprite = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ display: 'none' }} aria-hidden="true">
      <defs>
        <symbol id="icon-location" viewBox="0 0 32 32">
          <path d="M16 2a10 10 0 0 0-10 10c0 7.5 10 18 10 18s10-10.5 10-18A10 10 0 0 0 16 2zm0 13.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z" fill="currentColor"/>
        </symbol>

        <symbol id="icon-clock" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="14" fill="currentColor"/>
          <line x1="16" y1="16" x2="10" y2="11" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="16" y1="16" x2="23" y2="16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        </symbol>

        <symbol id="icon-phone" viewBox="0 0 24 24">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" fill="currentColor"/>
          <path d="M15.1 5.1a6 6 0 0 1 1.8 4.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M17.4 2.9a9.5 9.5 0 0 1 2.8 6.6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </symbol>

        <symbol id="icon-person" viewBox="0 0 32 32">
          <path d="M16 16c2.947 0 5.333-2.387 5.333-5.333S18.946 5.334 16 5.334s-5.333 2.387-5.333 5.333S13.054 16 16 16m0 2.667c-3.56 0-10.667 1.787-10.667 5.333v1.333c0 .733.6 1.333 1.333 1.333h18.667c.733 0 1.333-.6 1.333-1.333V24c0-3.547-7.107-5.333-10.667-5.333z" fill="currentColor"/>
        </symbol>

        <symbol id="icon-email" viewBox="0 0 24 32">
          <path d="M20 8H4c-1.1 0-1.99.9-1.99 2L2 22c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-.4 4.25-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 12.25a.85.85 0 1 1 .9-1.44L12 15l6.7-4.19a.85.85 0 1 1 .9 1.44" fill="currentColor"/>
        </symbol>

        <symbol id="icon-instagram" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
        </symbol>

        <symbol id="icon-facebook" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </symbol>

        <symbol id="icon-x" viewBox="0 0 24 24">
          <path d="M4 4l16 16M20 4 4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </symbol>

        <symbol id="icon-youtube" viewBox="0 0 24 24">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor"/>
        </symbol>

        <symbol id="icon-tiktok" viewBox="0 0 24 24">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </symbol>
      </defs>
    </svg>
  )
}

export default SvgSprite
