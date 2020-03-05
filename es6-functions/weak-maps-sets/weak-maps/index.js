let john = { name: "John" };

// the object can be accessed, john is the reference to it

// overwrite the reference
john = null;

// the object will be removed from memory
console.log('john', john);

let j = { name: 'John' };
let array = [j];

john = null;

// john is stored inside the array, so it won't be garbage-collected
// we can get it as array[0]
console.log('j in array', array[0]);

// WeakMap is fundamentally different in this aspect. 
// It doesn’t prevent garbage-collection of key objects.