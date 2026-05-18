export interface Barber {
    id: number;
    image: string;
    name: string;
    specialty: string;
    experience: string;
    rating: number;
    freeDate: string[];  // 'РРРР-ММ-ДД'
    freeHours: string[];  // 'HH:MM'
}