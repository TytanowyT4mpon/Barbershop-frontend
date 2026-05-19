import { Service } from '../types/service';

export const ServicesMock: Service[] = [
    {
        id: 1,
        name: 'Adult Haircut',
        price: 500.00,
        duration: 45,
        icon_name: 'AdultHaircut',
        description: 'Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis'
    },
    {
        id: 2,
        name: 'Kids Haircut',
        price: 350.00,
        duration: 30,
        icon_name: 'KidsHaircut',
        description: 'Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis'
    },
    {
        id: 3,
        name: 'Beard Trim',
        price: 300.00,
        duration: 30,
        icon_name: 'BeardTrim',
        description: 'Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis'
    },
    {
        id: 4,
        name: 'Neck Shave',
        price: 200.00,
        duration: 15,
        icon_name: 'NeckShave',
        description: 'Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis'
    },
    {
        id: 5,
        name: 'Scalp Moisturizing',
        price: 400.00,
        duration: 20,
        icon_name: 'ScalpMoisturizing',
        description: 'Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis'
    },
    {
        id: 6,
        name: 'Beard Grooming',
        price: 450.00,
        duration: 40,
        icon_name: 'BreadGroom', // Твоя назва файлу SVG, яку ми бачили в логах гіта
        description: 'Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis'
    }
];