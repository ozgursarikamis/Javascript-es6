let weakMap = new WeakMap();
let obj = { };

// The first difference from Map is that 
// WeakMap keys must be objects, not primitive values:
weakMap.set(obj, "ok");

// weakMap.set("test", "Whoops");
// // TypeError: Invalid value used as weak map key

/*
Now, if we use an object as the key in it, and there are no other references to
that object – it will be removed from memory (and from the map) automatically.
*/

let john = { name: "John" };
let _weakMap = new WeakMap();
_weakMap.set(john, "...");

console.log('_weakMap.get(john)', _weakMap.get(john));
john = null;
console.log('_weakMap', _weakMap);

/*
WeakMap does not support iteration and methods keys(), values(), entries(), 
so there’s no way to get all keys or values from it.
*/