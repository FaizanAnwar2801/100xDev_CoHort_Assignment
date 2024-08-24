// Readonly API

type User2 = {
    readonly name: string;
    readonly age: number;
}

const user: User2 = {
    name: "Faizan",
    age: 21

}

// user.age = 12;(cannot change internal values as readonly is imposed.)