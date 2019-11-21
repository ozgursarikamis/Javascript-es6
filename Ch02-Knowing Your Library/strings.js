console.log("a".repeat(9));
const str = "Hi. I'm a Javascript Developer";
console.log(str.includes("Javascript"));
console.log(str.includes("Javascript", 11));

console.log(str.startsWith("Hi"));
console.log(str.endsWith("Developer"));

console.log("1\n2\n3");
console.log(`1
2
3`);

let s = String.raw `xy\/*{{|||n${ 1 + 1 }z`;
console.log(s);