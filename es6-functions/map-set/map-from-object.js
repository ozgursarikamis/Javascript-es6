const object = { x: 42, y: 50 };
const entries = Object.entries(object);
console.log('entries', entries);

let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map.entries()); // make a plain object (*)

// done!
// obj = { banana: 1, orange: 2, meat: 4 }

console.log(obj.orange); // 2