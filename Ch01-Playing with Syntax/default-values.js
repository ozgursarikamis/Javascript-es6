let [a, b, c = 3] = [1, 2];
console.log('c', c);
console.log('b', b);
console.log('a', a);

let [m, n, [x, y]] = [9, 8, [7, 6]]; 
console.log('x', x);
console.log('y', y);