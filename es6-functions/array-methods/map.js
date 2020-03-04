let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" },
];

let mappedUsers = users.map((item, index, array) => {
    // returns new value, instead of item
    console.log("mapped: ", {item, index, array});
    return item.id * 2;
});

console.log('mappedUsers', mappedUsers);