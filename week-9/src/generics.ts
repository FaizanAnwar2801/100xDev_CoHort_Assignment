/*Generics enable you to create components that work with any 
data type while still providing compile-time type safety.*/

// type Input = string | number
// function getFirstElement(arr: Input[]) {
//     return arr[0];
// }
// const el = getFirstElement(['1', 2, '3', 'faizan']); // can be given mixed input & not able to recognise input type.


//Generics <T>
function identity<T>(arg: T): T { // return type becomes same as the input arg type.
    return arg;
} 

let output1 = identity<string>("myString");
let output2 = identity<number>(100);