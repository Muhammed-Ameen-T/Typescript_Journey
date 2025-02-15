// Define a type for a person
// type Person = {
//     name: string; // The person's name
//     age: number;  // The person's age
//     isStudent: boolean; // Whether the person is a student
// };
var userDetails = {
    name: "Debug Media",
    age: 20,
    salary: 100,
    getName: function () {
        console.log(this.name);
    }
};
function getUserName(userDetails) {
    return userDetails.name;
}
console.log(getUserName(userDetails));
//! TS Function to Sort array of objects
// let students:{name:string,mark:number}[] = [
//     { name: "Alice", mark: 2 },
//     { name: "Bob", mark: 5 },
//     { name: "Charlie", mark: 1 },
//     { name: "David", mark: 3 }
// ];
// // Function to sort array of objects using for loop
// function sortStudentsByMark(students:{name:string,mark:number}[]):void {
//     for (let i = 0; i < students.length-1; i++) {
//         for (let j = 0; j < students.length-i-1; j++) {
//             if (students[j].mark > students[j+1].mark) {
//                 let temp = students[j];
//                 students[j]=students[j+1];
//                 students[j+1]=temp
//             }   
//         }
//     }
// }
