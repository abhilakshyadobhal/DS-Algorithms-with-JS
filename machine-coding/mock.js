export const User = [
    {
        id: 1,
        name: 'Aman Saxena',
        email: '1@gmail.com',
        phone: '9977883838',
        my_payments: [], // who all have to give me
        dues: [
            // who all i owe money
        ],
        friends: [
            {
                id: 3,
                name: 'Shayan',
                email: '3@gmail.com',
                phone: '8867677565',
            },
        ],
    },
    {
        id: 3,
        name: 'Shayan',
        email: '3@gmail.com',
        phone: '8867677565',
        my_payments: [], // who all have to give me
        dues: [
            // who all i owe money
            {
                id: 1,
                name: 'Aman Saxena',
                email: '1@gmail.com',
                phone: '9977883838',
                amount: 500,
            },
        ],
        friends: [
            {
                id: 1,
                name: 'Aman Saxena',
                email: '1@gmail.com',
                phone: '9977883838',
            },
        ],
    },
    {
        id: 4,
        name: 'Airesh',
        email: '4@gmail.com',
        phone: '7779997779',
        my_payments: [], // who all have to give me
        dues: [],
        friends: [],
    },
];
