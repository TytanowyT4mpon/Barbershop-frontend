'use client';

import React, { useState } from 'react'
import style from './BarberCard.module.css'
import Image from 'next/image'
import { Barber } from '@/types/barber'
import ModalForm from '../ModalForm';

interface BarberCardProps {
    barber: Barber;
}

const BarberCard = ({ barber }: BarberCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <li className={style.BarberCard} key={barber.id}>
        <Image className={style.BarberImage} src={`${barber.image}`} alt='Barber image' width={350} height={280} />

        <div className={style.BarberCardInfo}>
            <h3>{barber.name}</h3>
            <ul className={style.CardText}>
                <li>
                    <p>Specialty: <span>{barber.specialty}</span></p>
                </li>
                <li>
                    <p>Experience: <span>{barber.experience}</span></p>
                </li>
                <li>
                    <p>Rating: <span>{barber.rating} / 5</span></p>
                </li>
            </ul>

            <button className={style.BtnBook} onClick={() => {
                setIsModalOpen(true);
            }}>Book</button>
        </div>

        {
            isModalOpen && (
                <ModalForm barber={barber} setIsOpen={setIsModalOpen} isOpen={isModalOpen} />
            )
        }
    </li>
  )
}

export default BarberCard
