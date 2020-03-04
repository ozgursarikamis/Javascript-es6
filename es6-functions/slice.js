let arr = ["t", "e", "s", "t"];

// slice the array starting 1 to item 3. item 3 is not included:
let sliced_a = arr.slice(1, 3);
console.log('sliced_a', sliced_a);

// original array 'arr' is not affected:
console.log('arr', arr);

let sliced_b = arr.slice(-2);
console.log('sliced_b', sliced_b);