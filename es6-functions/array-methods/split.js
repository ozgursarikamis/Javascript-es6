let _string = 'Bilbao, Gandalf, Nazgul, Saruman';
let arr = _string.split(', ');
console.log('arr', arr);

// arr = _string.split(', ', 2);
// console.log('arr', arr);

console.log('arr', arr.join(';'))