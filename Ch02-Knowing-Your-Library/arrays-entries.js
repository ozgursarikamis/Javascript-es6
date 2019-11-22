let arr = ['a', 'b', 'c'];
let entries = arr.entries();
let keys = arr.keys();
let values = arr.values();

console.log('entries', ...entries);
console.log('keys', ...keys);
console.log('values', ...values);
console.log();

let arr1 = [1, 2, 3, 4, 5];
arr1.copyWithin(1, 2, 4);
console.log(arr1);