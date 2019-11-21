var o = { name: "John", age: 23 };
// const {name, age} = o;
// console.log('name', name);
// console.log('age', age);

let {name: x, age: y} = o;
console.log('x', x);
console.log('y', y);