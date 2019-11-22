const s1 = window.Symbol("my symbol");
const s2 = window.Symbol("my symbol");
console.group("Symbol Definition");
console.log(s1 === s2);
console.log(s1 == s2);
console.log(typeof s1);
console.log(typeof s2);
console.groupEnd();

console.group("you cannot use Symbol with new keyword.");
try {
    let s = new Symbol();
} catch (error) {
    console.error(error);
}
console.groupEnd();

console.group("Using Symbols as property keys:");
let obj = null;
let s3 = null;

let s4 = Symbol();
s3 == s4;
obj = { [s3]: "mySymbol" };
console.log(obj[s3]);
console.log(obj[s3] == obj[s4]);
console.groupEnd();