// Define a type for a person
// type Person = {
//     name: string; // The person's name
//     age: number;  // The person's age
//     isStudent: boolean; // Whether the person is a student
// };

// // Create a function to greet a person
// function greet(person: Person): string {
//     return `Hello, ${person.name}!`;
// }

// // Example usage
// const john: Person = {
//     name: "John Doe",
//     age: 25,
//     isStudent: true
// };

// console.log(greet(john)); // Output: Hello, John Doe!


//! Interface
// interface Details {
//     name:string;
//     age:number;
//     salary:number;
//     getName:()=>void;
// }

// let userDetails: Details={
//     name:"Debug Media",
//     age:20,
//     salary:100,
//     getName(){
//         console.log(this.name);
//     }
// }

// console.log(userDetails);


// ! Union Operator (' | ')
// let userName: string | number = 'Ameen';
// let skills : (string | number)[] = ['CSS','HTML'] 

// ! Optional Operato (' ? ')
// class Person {
//     name?: string | number;

//     constructor(name?: string | number) {
//         this.name = name;
//     }

//     getName(): string | number | undefined {
//         return this.name;
//     }
// }

// let person1 = new Person('Ameen');
// let person2 = new Person();
// let person3 = new Person(42);

// console.log(person1.getName()); // Output: Ameen
// console.log(person2.getName()); // Output: undefined
// console.log(person3.getName()); // Output: 4

//! Functions
interface Details {
    name:string;
    age:number;
    salary:number;
    getName:()=>void;
}

