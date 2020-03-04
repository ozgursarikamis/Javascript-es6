let arr = [1, 2];
arr.concat([3, 4]);

// original arr is not affected:
console.log('arr', arr);

// concat function returns the result:
console.log('concat arr', arr.concat([3, 4]));
console.log('concat arr', arr.concat([3, 4], [5, 6]));
console.log('concat arr', arr.concat([3, 4], 5, 6));

let arrayLike = {
    0: "something", length: 1
};
console.log('arr', arr.concat(arrayLike));