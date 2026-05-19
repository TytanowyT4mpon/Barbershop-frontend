import { Barber } from './../types/barber';

export const BarbersMock: Barber[] = [
    {
        id: 1,
        photo_URL: '/examples/barberExample1.jpg',
        name: 'Andress Gill',
        services: [2, 4],
        experience: '5+ years',
        rating: 4.3,
        freeDate: [
            '2026-05-18', 
            '2026-05-19', 
            '2026-05-20', 
            '2026-05-21', 
            '2026-05-22'
        ],
        freeHours: ['09:00', '10:30', '13:00', '14:30', '16:00', '17:30']
    },
    {
        id: 2,
        photo_URL: '/examples/barberExample3.jpg',
        name: 'Adriana Lu',
        services: [1, 2, 4],
        experience: '2+ years',
        rating: 4.1,
        freeDate: [
            '2026-05-20', 
            '2026-06-12', 
            '2026-06-23', 
            '2026-05-22', 
            '2026-05-26'
        ],
        freeHours: ['10:00', '11:30', '13:00', '14:30', '16:00', '17:30']
    },
    {
        id: 3,
        photo_URL: '/examples/barberExample2.jpg',
        name: 'Antony Herrey',
        services: [1, 3, 4],
        experience: '7+ years',
        rating: 4.9,
        freeDate: [
            '2026-05-18', 
            '2026-05-19', 
            '2026-06-24', 
            '2026-06-25', 
            '2026-06-27'
        ],
        freeHours: ['08:30', '10:30', '13:20', '14:30', '17:00', '19:30']
    }
]