# Barbershop Landing Page

A modern, responsive landing page for a barbershop business. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Overview

This project is a production-ready marketing landing page that allows customers to learn about the barbershop, browse available services, view the team of barbers, and book an appointment through an interactive modal form.

## Features

- **Hero Section** — eye-catching banner with a call-to-action to open the booking form
- **Services** — showcase of all available haircut and grooming services with pricing
- **Barber Team** — cards for each barber with name, specialty, and photo
- **Stats** — key business metrics (years of experience, clients served, etc.)
- **Contacts** — address, phone, working hours, and map location
- **Booking Modal** — form to select a service, choose a barber, pick a date/time, and submit a booking request via API
- **Scroll Reveal Animations** — sections animate in as the user scrolls
- **Toast Notifications** — real-time feedback on form submission success or failure

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| UI Library | React 19 |
| Styling | Tailwind CSS v4, CSS Modules |
| HTTP Client | Axios |
| Notifications | Sonner |
| Loading States | React Spinners, React Loading Skeleton |

## Project Structure

```
barbershop-landing/
├── app/
│   ├── components/
│   │   ├── Hero/           # Landing hero banner
│   │   ├── Services/       # Services catalog
│   │   ├── BarbersChoose/  # Barber selection grid
│   │   ├── BarberCard/     # Individual barber card
│   │   ├── Stats/          # Business statistics
│   │   ├── ContactsBlock/  # Contact info section
│   │   ├── Footer/         # Page footer
│   │   └── ModalForm/      # Appointment booking form
│   ├── layouts/
│   │   ├── Modal/          # Reusable modal wrapper
│   │   └── ScrollReveal/   # Scroll-triggered animation wrapper
│   ├── page.tsx            # Main page composition
│   └── layout.tsx          # Root layout
├── lib/                    # Shared utilities and API helpers
├── mocks/                  # Mock data for services and barbers
└── types/                  # Shared TypeScript types
```