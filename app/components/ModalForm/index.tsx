'use client'

import Modal from '@/app/layouts/Modal'
import { Barber } from '@/types/barber'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './ModalForm.module.css'
import { ServicesMock } from '@/mocks/services'
import { Service } from '@/types/service'
import { barbersFreeHoursResponse, fetchBarbersFreeHours, sendAppointment, sendAppointmentRequest } from '@/lib/api/api'
import { toast } from 'sonner'
import { AxiosError } from 'axios'
import { ClipLoader } from 'react-spinners'

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
  const [selectedServicesId, setSelectedServicesId] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  // const [freeTimes, setSelsetFreeTimes] = useState<string[]>([])
  const [barberHoursData, setBarberHoursData] = useState<barbersFreeHoursResponse | null>();

  const [isGetHoursLoading, setIsetHoursLoading] = useState(false);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  const today = new Date().toISOString().split('T')[0];


  const handleServiceToggle = (serviceId: string) => {
    setSelectedServicesId((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]            
    );
  };

  useEffect(() => {
    if (!selectedDate || selectedServicesId.length === 0) {
      // setSelsetFreeTimes([]);
      setBarberHoursData(null);
      return;
    }

    const getBarberFreeHours = async() => {
      setIsetHoursLoading(true);
      try{
        const res = await fetchBarbersFreeHours(barber.id, selectedDate, selectedServicesId);
        // setSelsetFreeTimes(res.data.free_slots)
        setBarberHoursData(res.data);
        setSelectedTime('')
      } catch(err) {
        console.log(err);
        setBarberHoursData(null);
        // setSelsetFreeTimes([]);
      } finally{
        setIsetHoursLoading(false);
      }
    }

    getBarberFreeHours();
  }, [selectedDate, selectedServicesId, barber.id])

  const isButtonDisabled = 
    !name.trim() || 
    !phone.trim() || 
    !email.trim() || 
    selectedServicesId.length === 0 ||
    !selectedDate || 
    !selectedTime;

  const handleSubmit = async(formData: FormData) => {
    const data = Object.fromEntries(formData);

    const body: sendAppointmentRequest = {
      barber: barber.id,
      services: selectedServicesId.map(Number),
      date: data.date,
      time: selectedTime,
      comment: data.comment,
      customer_fullname: data.name,
      customer_phone: data.phone,
      customer_email: data.email,
    };

    try{
      setIsSubmitLoading(true)
      await sendAppointment(body);
      toast.success('Wizyta została pomyślnie zarezerwowana!')
      setIsOpen(false);

      setName('')
      setPhone('')
      setEmail('')
      setComment('')
      setSelectedServicesId([])
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
    } finally{
      setIsSubmitLoading(false)
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
            <input type="hidden" name="service" value={selectedServicesId} />
            <div className={styles.serviceGrid}>
              {barber.services.map(service => (
                <button
                  key={service.id}
                  type="button"
                  className={`${styles.serviceCard} ${selectedServicesId.includes(String(service.id)) ? styles.serviceCardActive : ''}`}
                  onClick={() => handleServiceToggle(String(service.id))}
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
            ) : selectedServicesId.length === 0 ? (
              <p className={styles.infoMessage}>Selct services</p>
            ) : isGetHoursLoading ? (
              <div className={styles.slotsSpinner}>
                <ClipLoader color="#DEC7A6" size={22} speedMultiplier={0.85} />
              </div>
            ) : barberHoursData?.free_slots && barberHoursData?.free_slots.length > 0 ? (
              barberHoursData?.free_slots.map((hour) => (
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
          
          <div className={styles.formFooter}>
            {barberHoursData && (
              <div className={styles.orderSummary}>
                <span className={styles.summaryItem}>
                  <svg aria-hidden="true" width="16" height="16" className={styles.summaryIcon}><use href="#icon-clock" /></svg>
                  {barberHoursData.total_duration_minutes} min
                </span>
                <span className={styles.summarySep} />
                <span className={styles.summaryItem}>
                  <svg aria-hidden="true" width="16" height="16" className={styles.summaryIcon}><use href="#icon-dollar" /></svg>
                  ${barberHoursData.total_price}
                </span>
              </div>
            )}
            <button type="submit" className={`${styles.submitBtn} ${isSubmitLoading ? styles.submitBtnLoading : ''}`} disabled={isButtonDisabled || isSubmitLoading}>
              {isSubmitLoading ? (
                <>
                  <ClipLoader color="#121212" size={16} speedMultiplier={0.85} />
                  Booking...
                </>
              ) : 'Book appointment'}
            </button>
          </div>
        </div>
      </form>
    </Modal>
  )
}

export default ModalForm
