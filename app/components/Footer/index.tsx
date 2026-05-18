import React from 'react'
import style from './Footer.module.css'

const socialLinks = [
  { id: 'icon-instagram', label: 'Instagram', href: 'https://www.instagram.com/' },
  { id: 'icon-facebook',  label: 'Facebook',  href: 'https://www.facebook.com/' },
  { id: 'icon-youtube',   label: 'YouTube',   href: 'https://www.youtube.com/' },
  { id: 'icon-tiktok',    label: 'TikTok',    href: 'https://www.tiktok.com/' },
]

const Footer = () => {
  return (
    <footer className={style.FooterContainer}>
      <h3>&copy; Copyright 2026 barbershop - All right reserved</h3>

      <ul className={style.iconsList}>
        {socialLinks.map(({ id, label, href }) => (
          <li key={id} className={style.iconsListElement}>
            <a href={href} aria-label={label} target="_blank" className={style.iconLink}>
              <svg className={style.icon} aria-hidden="true">
                <use href={`#${id}`} />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
