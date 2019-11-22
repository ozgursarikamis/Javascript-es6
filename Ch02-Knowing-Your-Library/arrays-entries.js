let arr = ['a', 'b', 'c'];
let entries = arr.entries();
let keys = arr.keys();
let values = arr.values();

console.log('entries', ...entries);
console.log('keys', ...keys);
console.log('values', ...values);