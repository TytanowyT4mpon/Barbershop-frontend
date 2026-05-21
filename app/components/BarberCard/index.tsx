'use client';

import React, { useState } from 'react'
import style from './BarberCard.module.css'
import Image from 'next/image'
import { Barber } from '@/types/barber'
import ModalForm from '../ModalForm';
import ScrollReveal from '@/app/layouts/ScrollReveal/ScrollReveal';
import { getPhotoPath } from '@/utils/helper';

interface BarberCardProps {
    barber: Barber;
}

const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill={filled ? 'var(--gold)' : 'none'}
        stroke={filled ? 'var(--gold)' : 'currentColor'}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={filled ? style.StarFilled : style.StarEmpty}
        aria-hidden="true"
    >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

const renderStars = (rating: number) => {
    const full = Math.floor(rating);
    const empty = 5 - full;
    return (
        <div className={style.RatingStars}>
            {Array.from({ length: full }).map((_, i) => (
                <StarIcon key={`f${i}`} filled={true} />
            ))}
            {Array.from({ length: empty }).map((_, i) => (
                <StarIcon key={`e${i}`} filled={false} />
            ))}
            <span className={style.RatingNumber}>{rating}/5</span>
        </div>
    );
};



const BarberCard = ({ barber }: BarberCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const specialtyText = barber.services.map((s) => s.name).join(', ');

    return (
        <li className={style.BarberCard} key={barber.id}>
            <div className={style.ImageWrapper}>
                <Image
                    className={style.BarberImage}
                    src={getPhotoPath(barber.photo_URL)}
                    alt={`${barber.name} photo`}
                    width={340}
                    height={300}
                />
                <span className={style.ExperienceBadge}>{barber.experience}</span>
            </div>

            <div className={style.BarberCardInfo}>
                <h3 className={style.BarberName}>{barber.name}</h3>

                <ScrollReveal>
                    <div className={style.StatsGrid}>
                        <div className={style.StatRow}>
                            <span className={style.StatLabel}>Specialty</span>
                            <span className={style.StatValue}>{specialtyText}</span>
                        </div>
                        <div className={style.StatRow}>
                            <span className={style.StatLabel}>Experience</span>
                            <span className={style.StatValue}>{barber.experience}</span>
                        </div>
                        <div className={style.StatRow}>
                            <span className={style.StatLabel}>Rating</span>
                            {renderStars(barber.rating)}
                        </div>
                    </div>
                </ScrollReveal>

                <div className={style.Divider} />

                <button
                    className={style.BtnBook}
                    onClick={() => setIsModalOpen(true)}
                >
                    Book Appointment
                </button>
            </div>

            {isModalOpen && (
                <ModalForm barber={barber} setIsOpen={setIsModalOpen} isOpen={isModalOpen} />
            )}
        </li>
    )
}

export default BarberCard
