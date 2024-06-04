// Example of a class Animal

class Animal {
    constructor(name, legCount) {
        this.name = name
        this.legCount = legCount
    }
    describe() {
        return `${this.name} has ${this.legCount} legs`
    }
}

const Animal1 = new Animal("cat", 4)

console.log(Animal1); // prints the function call
console.log(Animal1.describe()); // prints the returned description string