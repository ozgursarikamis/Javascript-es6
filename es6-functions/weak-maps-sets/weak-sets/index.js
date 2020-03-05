let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john);
visitedSet.add(pete);
visitedSet.add(john);

console.log('visitedSet', visitedSet.has(john));
console.log('visitedSet', visitedSet.has(mary));

john = null;
console.log('visitedSet', visitedSet);