let a = 17.0;
let b = 1.2;

// console.log('Number.isInteger(a) :', Number.isInteger(a));
// console.log('Number.isInteger(b) :', Number.isInteger(b));

let c = "hello";
let d = 12;
let e = NaN;
let f = "NaN";

// console.log(Number.isNaN(e));
// console.log(Number.isNaN(f));
// console.log(Number.isNaN(c));
// console.log(Number.isNaN(d));
console.log("*****************************************");

// console.log(isFinite(10));
// console.log(isFinite([]));
// console.log();

// console.log(Number.isFinite(10));
// console.log(Number.isFinite([]));

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

function epsilonEqual(a, b) {
    return Math.abs(a - b) < Number.EPSILON;
}

console.log(epsilonEqual(0.1 + 0.2, 0.3));
console.log(Math.sign(-2));
console.log(Math.sign(11));
console.log(Math.sign(0));