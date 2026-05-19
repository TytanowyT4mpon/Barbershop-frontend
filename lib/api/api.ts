import { Barber } from "@/types/barber";
import axios from "axios";

interface fetchBarbersFreeHoursResponse{
    date: string,
    free_slots: string[]
}

export interface sendAppointmentRequest{
    barber: number,
    service: number,
    date: FormDataEntryValue,
    time: string,
    comment: FormDataEntryValue,
    customer_fullname: FormDataEntryValue,
    customer_phone: FormDataEntryValue,
    customer_email: FormDataEntryValue
}

const baseUrl = process.env.NEXT_PUBLIC_API_URL
const api = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    }
})

export const fetchBarbers = async() => {
    const res = await api.get('/barbers');
    return res.data
}

export const fetchBarbersFreeHours = async(barberId: number, date: string) => {
    const res = await api.get<fetchBarbersFreeHoursResponse>(`/barbers/${barberId}/free_slots/?date=${date}`)
    return res;
}

export const sendAppointment = async(payload: sendAppointmentRequest) => {
    const res = await api.post('/appointments/', payload);
    return res.data
}
