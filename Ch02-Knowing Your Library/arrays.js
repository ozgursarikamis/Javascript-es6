let arr = new Array(2, 3, 4);
console.log(arr);

let arr2 = Array.of(2, 3, 4); // wrong
console.error("wrong");
console.log(arr2);

let arr1 = [1, 2, 3, 4];
arr1.fill(5, 1, 2); //value, start index, end index
console.log(arr1);

const arr3 = arr1.fill(333, 2, 3);
console.log('arr3 :', arr3);