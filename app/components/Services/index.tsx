import React from 'react'
import Image from 'next/image'
import style from './Services.module.css'
import ScrollReveal from '@/app/layouts/ScrollReveal/ScrollReveal'

const ServicesSection = () => {
  return (
    <section className={style.ServicesMain}>
        <div className={style.ServicesContainer}>
            <h2>Browse our services</h2>
            <p>Nulla egestas sapien integer mi fermentum tellus tristique 
                consequat pulvinar sagittis adipiscing egestas purus et mi tempus semper 
                id vel prci eu magna in senectus sit eget justo eget.
            </p>

            <ul className={style.OurServicesList} id='services-section'>
                <li className={style.ServicesListElement}>
                    <Image src="/icons/AdultHaircut.svg" width={64} height={57} alt="Adult Haircut" />
                    <ScrollReveal>
                        <div className={style.ListElementText}>
                            <h3>
                                Adult haircut
                            </h3>
                            <p>
                                Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis
                            </p>
                        </div>
                    </ScrollReveal>
                </li>
                <li className={style.ServicesListElement}>
                    <Image src="/icons/KidsHaircut.svg" width={64} height={57} alt="Kids Haircut" />
                    <ScrollReveal>
                        <div className={style.ListElementText}>
                            <h3>
                                Kids Haircut
                            </h3>
                            <p>
                                Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis
                            </p>
                        </div>
                    </ScrollReveal>
                </li>
                <li className={style.ServicesListElement}>
                    <Image src="/icons/BeardTrim.svg" width={64} height={57} alt="Beard Trim" />
                    <ScrollReveal>
                        <div className={style.ListElementText}>
                            <h3>
                                Beard Trim
                            </h3>
                            <p>
                                Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis
                            </p>
                        </div>
                    </ScrollReveal>
                </li>
                <li className={style.ServicesListElement}>
                    <Image src="/icons/BreadGroom.svg" width={64} height={57} alt="Beard Groom" />
                    <ScrollReveal>
                        <div className={style.ListElementText}>
                            <h3>
                                Neck Shave
                            </h3>
                            <p>
                                Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis
                            </p>
                        </div>
                    </ScrollReveal>
                </li>
                <li className={style.ServicesListElement}>
                    <Image src="/icons/NeckShave.svg" width={64} height={57} alt="Neck Shave" />
                    <ScrollReveal>
                        <div className={style.ListElementText}>
                            <h3>
                                Scalp Moisturizing
                            </h3>
                            <p>
                                Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis
                            </p>
                        </div>
                    </ScrollReveal>
                </li>
                <li className={style.ServicesListElement}>
                    <Image src="/icons/ScalpMoisturizing.svg" width={64} height={57} alt="Scalp Moisturizing" />
                    <ScrollReveal>
                        <div className={style.ListElementText}>
                            <h3>
                                Beard Grooming
                            </h3>
                            <p>
                                Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis
                            </p>
                        </div>
                    </ScrollReveal>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default ServicesSection;