let arr = ["I", "study", "JavaScript"];
// start from 1, delete 1 item:

// splice returns the deleted elements.
arr.splice(1, 1);

// arr is affected:
console.log('arr', arr);

arr = ["I", "study", "JavaScript", "right", "now"];
// delete items starting from 0, delete 3 items and add 2:
arr.splice(0, 3, "lets", "dance", "now!");
console.log('arr', arr);

arr = ["I", "study", "JavaScript"];
arr.splice(2, 0, "complex", "language");
console.log('arr', arr);

arr = [1, 2, 5];
arr.splice(-1, 0, 3, 4);
console.log('arr', arr);