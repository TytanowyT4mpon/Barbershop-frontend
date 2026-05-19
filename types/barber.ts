import { Service } from "./service";

export interface Barber {
    id: number;
    photo_URL: string;
    name: string;
    services: Service[];
    experience: string;
    rating: number;
    freeDate: string[];  // 'РРРР-ММ-ДД'
    freeHours: string[];  // 'HH:MM'
}