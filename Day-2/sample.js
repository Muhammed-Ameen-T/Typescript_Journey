var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person1 = new Person('Ameen');
var person2 = new Person();
var person3 = new Person(42);
console.log(person1.getName()); // Output: Ameen
console.log(person2.getName()); // Output: undefined
console.log(person3.getName()); // Output: 4
