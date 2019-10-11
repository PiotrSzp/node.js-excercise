// const person = {
//     name: 'Jonh Doe',
//     age: 30
// };

// methods of Module Wrapper Function: exports, require, module, __filename, __dirname
// console.log(__filename);
// console.log(__dirname);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name}, I\'m ${this.age}`);
    }
}

module.exports = Person;