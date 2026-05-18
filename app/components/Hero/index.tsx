'use client'

import React from 'react'
import style from './Hero.module.css'

const HeroSection = () => {
    const handleScroll = (target: string) => () => {
        const element = target === 'services'
            ? document.getElementById('services-section')
            : document.getElementById('appointment-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <section className={style.HeroSection}>
        <main className={style.HeroContainer}>
            <div className={style.HeroMainText}>
                <h1>The ultimate convenience for busy people</h1>
                <p>Experience the Convenience of In-Home Barber Services</p>
            </div>
            <div className={style.HeroBtns}>
                <button className={style.btnBook} onClick={handleScroll('appointment')}>Book an Appointment</button>
                <button className={style.btnBrowse} onClick={handleScroll('services')}>browse services</button>
            </div>
        </main>
    </section>
  )
}

export default HeroSection
