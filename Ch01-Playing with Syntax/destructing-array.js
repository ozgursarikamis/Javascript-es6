const array = [1, 2, 3, 4];

[a, b] = array.slice(2);
console.log('a', a);
console.log('b', b);
// console.log('c', c);
// console.log('d', d);

let [x, , y] = [9, 8, 7];
console.log('x', x);
console.log('y', y);