'use client'

import Modal from '@/app/layouts/Modal'
import { Barber } from '@/types/barber'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './ModalForm.module.css'
import { ServicesMock } from '@/mocks/services'
import { Service } from '@/types/service'
import { fetchBarbersFreeHours, sendAppointment, sendAppointmentRequest } from '@/lib/api/api'
import { toast } from 'sonner'
import { ApiError } from 'next/dist/server/api-utils'
import { AxiosError } from 'axios'

interface ModalFormProps {
  barber: Barber;
  setIsOpen: (e: boolean) => void;
  isOpen: boolean;
}

const ModalForm = ({ barber, isOpen, setIsOpen }: ModalFormProps) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [freeTimes, setSelsetFreeTimes] = useState<string[]>([])

  const [isLoading, setIsLoading] = useState(false);
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (!selectedDate) {
      setSelsetFreeTimes([]);
      return;
    }

    const getBarberFreeHours = async() => {
      setIsLoading(true);
      try{
        const res = await fetchBarbersFreeHours(barber.id, selectedDate);
        setSelsetFreeTimes(res.data.free_slots)
        setSelectedTime('')
      } catch(err) {
        console.log(err);
        setSelsetFreeTimes([]);
      } finally{
        setIsLoading(false);
      }
    }

    getBarberFreeHours();
  }, [selectedDate, barber.id])

  const isButtonDisabled = 
    !name.trim() || 
    !phone.trim() || 
    !email.trim() || 
    !selectedServiceId || 
    !selectedDate || 
    !selectedTime;

  const handleSubmit = async(formData: FormData) => {
    const data = Object.fromEntries(formData);

    const body: sendAppointmentRequest = {
      barber: barber.id,
      service: Number(data.service),
      date: data.date,
      time: selectedTime,
      comment: data.comment,
      customer_fullname: data.name,
      customer_phone: data.phone,
      customer_email: data.email,
    };

    try{
      await sendAppointment(body);
      toast.success('Wizyta została pomyślnie zarezerwowana!')
      setIsOpen(false);

      setName('')
      setPhone('')
      setEmail('')
      setComment('')
      setSelectedServiceId('')
      setSelectedDate('')
      setSelectedTime('')
    } catch (err) {
        const axiosError = err as AxiosError<{ 
          error?: string; 
          date?: string[];
          [key: string]: any;
        }>;

        let backendError = '';

        if (axiosError.response?.data) {
          const data = axiosError.response.data;
          if (data.error) {
            backendError = data.error;
          } 
          else {
            const firstErrorField = Object.values(data)[0];
            
            if (Array.isArray(firstErrorField)) {
              backendError = firstErrorField[0];
            } else if (typeof firstErrorField === 'string') {
              backendError = firstErrorField;
            }
          }
        }

        toast.error(backendError || 'Coś poszło nie tak. Spróbuj ponownie!');
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      closeModal={() => setIsOpen(false)}
      hideCloseBtn
      className={styles.modalOverride}
      bodyClassName={styles.modalBodyOverride}
    >
    <button
        type="button"
        className={styles.closeBtn}
        onClick={() => setIsOpen(false)}
        aria-label="Close"
        >
        <svg aria-hidden="true" width="20" height="20">
            <use href="#icon-x" />
        </svg>
    </button>
      <form action={handleSubmit} className={styles.form}>
        {/* Left panel */}
        <div className={styles.leftPanel}>
          <div className={styles.avatarWrap}>
            <Image src={barber.photo_URL} alt={barber.name} fill className={styles.avatar} />
          </div>

          <h2 className={styles.barberName}>{barber.name.toUpperCase()}</h2>

          <div className={styles.serviceSelectWrap}>
            <label className={styles.label}>Choose a service</label>
            <input type="hidden" name="service" value={selectedServiceId} />
            <div className={styles.serviceGrid}>
              {barber.services.map(service => (
                <button
                  key={service.id}
                  type="button"
                  className={`${styles.serviceCard} ${selectedServiceId === String(service.id) ? styles.serviceCardActive : ''}`}
                  onClick={() => setSelectedServiceId(String(service.id))}
                >
                  <Image
                    src={`/icons/${service.icon_name}.svg`}
                    alt={service.name}
                    width={28}
                    height={25}
                    className={styles.serviceCardIcon}
                  />
                  <span className={styles.serviceCardName}>{service.name}</span>
                  <span className={styles.serviceCardMeta}>${service.price} · {service.duration}m</span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.fieldLeft}>
            <label className={styles.label}>Date</label>
            <input
              type="date"
              name='date'
              className={styles.dateInput}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={today}
              required
            />
          </div>

          <p className={styles.freeTimesLabel}>Free times:</p>
          <input type="hidden" name="hour" value={selectedTime} required />
          <div className={styles.timeSlots}>
            {!selectedDate ? (
              <p className={styles.infoMessage}>Please select a date first</p>
            ) : isLoading ? (
              <p className={styles.infoMessage}>Loading slots...</p>
            ) : freeTimes.length > 0 ? (
              freeTimes.map((hour) => (
                <button
                  key={hour}
                  type="button"
                  className={`${styles.timeChip} ${selectedTime === hour ? styles.timeChipActive : ''}`}
                  onClick={() => setSelectedTime(hour)}
                >
                  {hour}
                </button>
              ))
            ) : (
              <p className={styles.errorMessage}>No available slots for this day</p>
            )}
          </div>
        </div>

        {/* Right panel */}
        <div className={styles.rightPanel}>
          <div className={styles.field}>
            <label className={styles.label}>Name</label>
            <div className={styles.inputWrap}>
              <svg aria-hidden="true" className={styles.inputIcon}>
                <use href="#icon-person" />
              </svg>
              <input
                type="text"
                name="name"
                className={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Phone</label>
            <div className={styles.inputWrap}>
              <svg aria-hidden="true" className={styles.inputIcon}>
                <use href="#icon-phone" />
              </svg>
              <input
                type="tel"
                name="phone"
                className={styles.input}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Email</label>
            <div className={styles.inputWrap}>
              <svg aria-hidden="true" className={styles.inputIcon}>
                <use href="#icon-email" />
              </svg>
              <input
                type="email"
                name="email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Comment</label>
            <textarea
              name="comment"
              className={`${styles.input} ${styles.textarea}`}
              placeholder="Leave a comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          <button type="submit" className={styles.submitBtn} disabled={isButtonDisabled}>Submit</button>
        </div>
      </form>
    </Modal>
  )
}

export default ModalForm
