class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    } 

    get name(){
        return this._name_;
    }
    set name(name) {
        this._name_ = name;
    }
}

var p = new Person("Zana", 3);
// console.log(p.name);
// console.log(p.age);
// p.name = "Özgür";
// p.age = 35;
// console.log(p.name);
// console.log(p.age);
console.log("name" in p);
console.log("name" in p.__proto__);
console.log("name" in Person.prototype);
console.log(Object.getOwnPropertyDescriptor(Person.prototype, "name").get);
console.log(Object.getOwnPropertyDescriptor(Person.prototype, "name").set);
console.log(Object.getOwnPropertyDescriptor(Person.prototype, "name").value);
console.log(Object.getOwnPropertyDescriptor(p, "_name_").value);