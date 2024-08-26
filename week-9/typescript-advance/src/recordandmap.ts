interface User4 {
    id: string;
    name: string;
}

type Users = Record<string, User4>;

const users: Users = {
    'abc123': { id: 'abc123', name: 'John Doe' }, // id: key & name of the user.
    'xyz789': { id: 'xyz789', name: 'Jane Doe' }, // key value pairing.
};
console.log(users['abc123']);


const usersMap = new Map<string, User4>();

// Add users to the map using .set

usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

// Accessing a value using .get

console.log(usersMap.get('abc123'));