'use client'

import React, { useEffect, useState } from 'react'
import style from './BarbersChoose.module.css'
import BarberCard from '../BarberCard'
import { Barber } from '@/types/barber'
import { fetchBarbers } from '@/lib/api/api'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const BarbersChooseSection = () => {
    const [barbers, setBarbers] = useState<Barber[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getBarbers = async() => {
            setIsLoading(true);
            try {
                const res = await fetchBarbers();
                setBarbers(res)
            } catch(err) {
                console.log("Sth went wrong!")
            } finally {
                setIsLoading(false);
            }
        }

        getBarbers();
    }, [])

    return (
        <section className={style.BarbersMain}>
            <div className={style.BarbersContainer}>
                <span className={style.SectionLabel}>Our Team</span>
                <h2>Choose your barber</h2>
                <p className={style.SectionSubtitle}>
                    Expert craftsmen dedicated to delivering your perfect look
                </p>

                {isLoading ? (
                    <SkeletonTheme baseColor="#d4bc92" highlightColor="#e8d5b0">
                        <ul className={style.BarbersList}>
                            {[1, 2, 3].map(i => (
                                <li key={i} className={style.SkeletonCard}>
                                    <Skeleton height={300} borderRadius={0} />
                                    <div className={style.SkeletonInfo}>
                                        <Skeleton height={20} width="55%" style={{ margin: '0 auto', display: 'block' }} />
                                        <Skeleton height={11} width="78%" />
                                        <Skeleton height={11} width="58%" />
                                        <Skeleton height={11} width="70%" />
                                        <Skeleton height={44} borderRadius={0} style={{ marginTop: 8 }} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </SkeletonTheme>
                ) : barbers && barbers.length > 0 ? (
                    <ul className={style.BarbersList} id='appointment-section'>
                        {barbers.map(barber => (
                            <BarberCard key={barber.id} barber={barber} />
                        ))}
                    </ul>
                ) : (
                    <p className={style.NoBarbers}>No Barbers Available</p>
                )}
            </div>
        </section>
    )
}

export default BarbersChooseSection
