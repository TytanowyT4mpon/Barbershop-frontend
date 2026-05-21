'use client'

import React, { useEffect, useState } from 'react'
import style from './BarbersChoose.module.css'
import BarberCard from '../BarberCard'
import { Barber } from '@/types/barber'
import { fetchBarbers, fetchBarbersResponse } from '@/lib/api/api'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Pagination from '../Pagination/Pagination'

const BarbersChooseSection = () => {
    // const [barbers, setBarbers] = useState<Barber[]>([]);
    const [data, setData] = useState<fetchBarbersResponse | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);

    const ITEMS_PER_PAGE = 6;
    const totalPages = data?.count ? Math.ceil(data.count / ITEMS_PER_PAGE) : 1;

    useEffect(() => {
        const getBarbers = async() => {
            setIsLoading(true);
            try {
                const res = await fetchBarbers(page);
                setData(res);
            } catch(err) {
                console.log("Sth went wrong!")
                setData(null);
            } finally {
                setIsLoading(false);
            }
        }

        getBarbers();
    }, [page])

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
                ) : data?.results && data?.results.length > 0 ? (
                    <ul className={style.BarbersList} id='appointment-section'>
                        {data?.results.map(barber => (
                            <BarberCard key={barber.id} barber={barber} />
                        ))}
                    </ul>
                ) : (
                    <p className={style.NoBarbers}>No Barbers Available</p>
                )}
            </div>

            {data && totalPages > 1 && (
                <Pagination totalPages={totalPages} currentPage={page} onPageChange={setPage} />
            )}
        </section>
    )
}

export default BarbersChooseSection
