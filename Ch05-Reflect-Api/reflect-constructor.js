//The static Reflect.construct() method acts like the new operator, 
// but as a function.

function constructor1(a, b) {
    this.a = a;
    this.b = b;

    this.f = function () {
        return this.a + this.b + this.c;
    }
}

function constructor2() { }
constructor2.prototype.c = 100;

var myObject = Reflect.construct(constructor1, [1, 2], constructor2);
console.log(myObject.f());

// 
// class constructor1 {
//     constructor(a, b) {
//         this.a = a;
//         this.b = b;
//         this.f = function () {
//             return this.a + this.b + this.c;
//         };
//     }
// }

// class constructor2 {
//     constructor() { }
// }
// constructor2.prototype.c = 100;

// var myObject = Reflect.construct(constructor1, [1, 2], constructor2);
// console.log(myObject.f());