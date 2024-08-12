// let x: number = 1;
// let s: string = "harkirat"
// console.log(x);
// console.log(s);

//BASIC FUNCTION WITH TYPED ARGS
// function greet(firstname:string){
//     console.log("Hello" + " " + firstname)
// }
// greet("Faizan")

//FUNCTION WITH RETURN TYPE
// function sum(a:number, b:number):number{
//     return(a+b)
// }
// console.log(sum(5,10))

//TYPEINFERENCE
// function isLegal(age:number):boolean{
//     if(age<18){
//         return(false)
//     }else{
//         return(true)
//     }
// }
// console.log(isLegal(19))

//CALLBACK
// function timeDelay(fn:()=>void){
//     setTimeout(fn,1000)
// }
// timeDelay(function(){
//     console.log("Hii after 1 sec");
// })

interface User {
	firstName: string;
	lastName: string;
	email?: string; // oprtional agrs
	age: number;
}

function isLegal(user:User):boolean{
    if(user.age<18){
        return(false)
    }else{
        return(true)
    }
}

class emp implements User{
    firstName: string;
    lastName: string;
    email?: string;
    age: number;

    constructor(f:string, l:string,a:number, e?:string){
        this.firstName = f;
        this.lastName = l;
        this.email= e;
        this.age = a;
    }
}

console.log(isLegal({
    firstName:"Faizan",
    lastName:"Anwar",
    email:"fa@gmail.com",
    age:23
}))

const e = new emp("Faizan", "Anwar", 23 , "faizan@gmail.com");
console.log(e.firstName)
console.log(e.email)