class Person {
    name?: string | number;

    constructor(name?: string | number) {
        this.name = name;
    }

    getName(): string | number | undefined {
        return this.name;
    }
}

let person1 = new Person('Ameen');
let person2 = new Person();
let person3 = new Person(42);

console.log(person1.getName()); // Output: Ameen
console.log(person2.getName()); // Output: undefined
console.log(person3.getName()); // Output: 4


