interface User {
    id: number;
    name: string;
    email: string;
}

interface Data {
    type: string;
    info: string;
    id: number
}

export const getAllUsers = (): User[] => {
    return [
    { id: 1, name: 'Jane Doe', email: 'jane@example.com' },
    { id: 2, name: 'John Smith', email: 'john@example.com' }
    ];
};

export const getAllData = (): Data[] => {
    return [
        {
        type: "test",
        info: "1.0.0",
        id: 1253,
        }
    ]
}