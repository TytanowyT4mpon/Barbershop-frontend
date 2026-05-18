import React from 'react'
import style from './Stats.module.css'
import Image from 'next/image'
import ScrollReveal from '@/app/layouts/ScrollReveal/ScrollReveal'

const StatsSections = () => {
  return (
    <section className={style.StatsSection}>
      <main className={style.StatsContainer}>
        <div className={style.StatsBlock}>
            <div className={style.StatsTextBlock}>
                <h2>Your personal barber service at your home</h2>
                <p>
                    Nulla egestas sapien integer mi fermentum tellus tristique consequat 
                    pulvinar sagittis adipiscing egestas purus et mi tempus semper id 
                    vel prci eu magna in senectus sit eget justo
                </p>

                <ScrollReveal>
                    <div className={style.StatsInfo}>
                        <div className={style.customerSatisf}>
                            <h3>99<span>%</span></h3>
                            <p>Customer Satisfaction</p>
                        </div>
                        <div className={style.Expirience}>
                            <h3>10<span>+</span></h3>
                            <p>years of experience</p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            <ScrollReveal>
                <Image 
                    src='/status-section.jpg' 
                    alt="Barber giving clean fade haircut" 
                    width={600}
                    height={600}
                    className={style.StatsImage}
                    priority={false}
                />
            </ScrollReveal>
            </div>
      </main>
    </section>
  )
}

export default StatsSections
