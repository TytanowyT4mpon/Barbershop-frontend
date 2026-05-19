import { Service } from '../types/service';

export const ServicesMock: Service[] = [
    {
        id: 1,
        name: 'Adult Haircut',
        price: 500.00,
        duration: 45,
        iconName: 'AdultHaircut',
        description: 'Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis'
    },
    {
        id: 2,
        name: 'Kids Haircut',
        price: 350.00,
        duration: 30,
        iconName: 'KidsHaircut',
        description: 'Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis'
    },
    {
        id: 3,
        name: 'Beard Trim',
        price: 300.00,
        duration: 30,
        iconName: 'BeardTrim',
        description: 'Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis'
    },
    {
        id: 4,
        name: 'Neck Shave',
        price: 200.00,
        duration: 15,
        iconName: 'NeckShave',
        description: 'Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis'
    },
    {
        id: 5,
        name: 'Scalp Moisturizing',
        price: 400.00,
        duration: 20,
        iconName: 'ScalpMoisturizing',
        description: 'Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis'
    },
    {
        id: 6,
        name: 'Beard Grooming',
        price: 450.00,
        duration: 40,
        iconName: 'BreadGroom', // Твоя назва файлу SVG, яку ми бачили в логах гіта
        description: 'Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis'
    }
];