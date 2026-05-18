'use client'

import Modal from '@/app/layouts/Modal'
import { Barber } from '@/types/barber'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './ModalForm.module.css'

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
  const [selectedDate, setSelectedDate] = useState(barber.freeDate[0] ?? '')
  const [selectedTime, setSelectedTime] = useState('')

  const handleSubmit = (formData: FormData) => {
    const data = Object.fromEntries(formData);
    setIsOpen(false);
    console.log("FormSend: ", data);
    // TODO: submit booking
  }

  return (
    <Modal
      isOpen={isOpen}
      closeModal={() => setIsOpen(false)}
      hideCloseBtn
      className={styles.modalOverride}
    >
      <form action={handleSubmit} className={styles.form}>
        {/* Left panel */}
        <div className={styles.leftPanel}>
          <div className={styles.avatarWrap}>
            <Image src={barber.image} alt={barber.name} fill className={styles.avatar} />
          </div>
          <h2 className={styles.barberName}>{barber.name.toUpperCase()}</h2>

          <div className={styles.fieldLeft}>
            <label className={styles.label}>Date</label>
            <input
              type="date"
              name='date'
              className={styles.dateInput}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>

          <p className={styles.freeTimesLabel}>Free times:</p>
          <input type="hidden" name="hour" value={selectedTime} />
          <div className={styles.timeSlots}>
            {barber.freeHours.map((hour) => (
              <button
                key={hour}
                type="button"
                className={`${styles.timeChip} ${selectedTime === hour ? styles.timeChipActive : ''}`}
                onClick={() => setSelectedTime(hour)}
              >
                {hour}
              </button>
            ))}
          </div>
        </div>

        {/* Right panel */}
        <div className={styles.rightPanel}>
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

          <button type="submit" className={styles.submitBtn}>Submit</button>
        </div>
      </form>
    </Modal>
  )
}

export default ModalForm
