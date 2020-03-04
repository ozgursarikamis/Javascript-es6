let arr = [1, 0, false, NaN];
console.log('arr', arr.indexOf(0)); // 1
console.log('arr', arr.indexOf(false)); // 2
console.log('arr', arr.indexOf(1)); // 0
console.log('arr', arr.indexOf("test")); // -1: does not exist

console.log('arr', arr.indexOf(NaN)); // -1, === operator doesn't work with NaN

console.log('arr', arr.includes(false)); // true
console.log('arr', arr.includes(true)); // false