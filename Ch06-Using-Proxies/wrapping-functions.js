/*
The apply(target, thisArg, args) trap handles calling a proxy as function:

    target is the target object (function is an object in JavaScript),
    thisArg is the value of this.
    args is a list of arguments.
*/

function delay(f, ms) {
     // return a wrapper that passes the call to f after the timeout
    return function () { //wrapper function
        setTimeout(() => {
            f.apply(this, arguments)
        }, ms);
    }
}

function sayHi(user) {
    console.log(`Hello ${user}`);
}
console.log("SayHi");
sayHi = delay(sayHi, 2000);
sayHi("Özgür");