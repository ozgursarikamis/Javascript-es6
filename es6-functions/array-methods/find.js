let arr = ["a", "b", "c", "d"];

// Returns the value of the first element in the array 
// where predicate is true, and undefined otherwise.
// let result = arr.find((item, index, array) => {
//     console.log('index', index);
//     console.log('item', item);
//     console.log('array', array);
// });

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" },
];

let user = users.find((x, y, z) => {
    console.log('x', x);
    console.log('y', y);
    console.log('z', z);
    return x.id === 3;
});
console.log('user', user);
