const array = [1, 2, 3, 4];

[a, b] = array.slice(2);
console.log('a', a);
console.log('b', b);
// console.log('c', c);
// console.log('d', d);

let [x, , y] = [9, 8, 7];
console.log('x', x);
console.log('y', y);
console.log("------------------------")
let [u, ...v] = [1, 2, 3, 4, 5, 6];
console.log('u', u);
console.log('v', v);
let [m,,,, ...n] = [1, 2, 3, 4, 5, 6];
console.log('m', m);
console.log('n', n);