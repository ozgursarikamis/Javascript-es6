class Student {
    constructor(name) {
        this.name = name;
    }
}
var s1 = new Student("Özgür");
var s2 = new Student(s1.name);

// console.log(s1.name);
// console.log(s2.name);

// console.log(typeof s1);
// console.log(typeof s1);
// console.log(typeof s2);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printProfile(){
        console.log(`Name is ${this.name} and age is ${this.age}`);
    }
}

var p = new Person("Zana", 3);
p.printProfile();

// or:
Person.prototype.printProfile2 = function () {
    console.log(`Name is ${this.name} and age is ${this.age}`);
}

p.printProfile2();
console.log('p.__proto__', p.__proto__);
console.log('Person.prototype', Person.prototype);