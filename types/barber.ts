import { Service } from "./service";

export interface Barber {
    id: number;
    image: string;
    name: string;
    serviceId: number[];
    experience: string;
    rating: number;
    freeDate: string[];  // 'РРРР-ММ-ДД'
    freeHours: string[];  // 'HH:MM'
}