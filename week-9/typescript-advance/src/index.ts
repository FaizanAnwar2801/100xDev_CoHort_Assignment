// Basic Recap

interface User {
    name: string;
    age: number;
}

function sumOfAges(user1: User, user2: User) {
    return (user1.age + user2.age);
}

const SoA = sumOfAges({ name: "Faizan", age: 23 }, { name: "Nehal", age: 24 })
console.log(SoA)

// Pick API

interface User1 {
    id: number;
    name: string;
    age: number;
    email: string;
    createdAt: Date;
}



const displayUserProfile = (user: UserProfile) => {
    console.log(`Name: ${user.name}, Email: ${user.email}`);
};

displayUserProfile({
    name: "Nehal Gupta",
    email: "ng7@gmail.com"
})

// Partial API

type UserProfile = Pick<User1, 'name' | 'email'>;
type UpdateProps = Pick<User1, 'name' | 'age' | 'email'>

// partial creates optional properties type(can update any one/all the prop values.)

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updatedProps: UpdatePropsOptional) {
    // hit the database tp update the user query
}
updateUser({})