'use client'

import React, { useEffect, useState } from 'react'
import style from './BarbersChoose.module.css'
import BarberCard from '../BarberCard'
import { Barber } from '@/types/barber'
import { fetchBarbers } from '@/lib/api/api'

const BarbersChooseSection = () => {
    const [barbers, setBarbers] = useState<Barber[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getBarbers = async() => {
            setIsLoading(true);
            try{
                const res = await fetchBarbers();
                setBarbers(res)
                console.log("resresres: ", res);
            } catch(err){
                console.log("Sth went wrong!")
            } finally{
                setIsLoading(false);
            }
        }

        getBarbers();
    }, [])

  return (
    <section className={style.BarbersMain}>
        <div className={style.BarbersContainer}>
            <h2>Choose your barber</h2>
            
            {!isLoading ? (
                <ul className={style.BarbersList} id='appointment-section'>
                    {barbers.map(barber => (
                        <BarberCard key={barber.id} barber={barber} />
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    </section>
  )
}

export default BarbersChooseSection
