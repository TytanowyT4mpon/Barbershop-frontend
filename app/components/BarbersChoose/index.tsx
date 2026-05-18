import React from 'react'
import style from './BarbersChoose.module.css'
import BarberCard from '../BarberCard'
import { BarbersMock } from '@/mocks/barbers'

const BarbersChooseSection = () => {
  return (
    <section className={style.BarbersMain}>
        <div className={style.BarbersContainer}>
            <h2>Choose your barber</h2>

            <ul className={style.BarbersList} id='appointment-section'>
                {BarbersMock.map(barber => (
                    <BarberCard key={barber.id} barber={barber} />
                ))}
            </ul>
        </div>
    </section>
  )
}

export default BarbersChooseSection
