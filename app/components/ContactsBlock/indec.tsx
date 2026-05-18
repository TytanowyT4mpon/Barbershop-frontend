import React from 'react'
import style from './ContactsBlock.module.css'
import ScrollReveal from '@/app/layouts/ScrollReveal/ScrollReveal'

const ContactsBlock = () => {
  return (
    <ScrollReveal>
        <div className={style.ContactsWrapper}>
            <ul className={style.ContactsContainer}>

                <li className={style.infoBlock}>
                    <svg className={style.icon}>
                        <use href="#icon-location" />
                    </svg>
                    <h3 className={style.infoTitle}>Address</h3>
                    <p className={style.infoText}>
                        3696 Lynden Road, Lefroy<br />Ontario Canada
                    </p>
                </li>

                <li className={style.infoBlock}>
                    <svg className={style.icon}>
                        <use href="#icon-phone" />
                    </svg>
                    <h3 className={style.infoTitle}>Phone</h3>
                    <p className={style.infoText}>
                        +62(123)-456-7890<br />+62(123)-456-7890
                    </p>
                </li>

                <li className={style.infoBlock}>
                    <svg className={style.icon}>
                        <use href="#icon-clock" />
                    </svg>
                    <h3 className={style.infoTitle}>Hours</h3>
                    <p className={style.infoText}>
                        Mon – Sat: 9AM – 8PM<br />Sun: 9AM – 6PM
                    </p>
                </li>

            </ul>
        </div>
    </ScrollReveal>
  )
}

export default ContactsBlock
