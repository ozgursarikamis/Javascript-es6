/*
    WeakMap has only the following methods:

        weakMap.get(key)
        weakMap.set(key, value)
        weakMap.delete(key)
        weakMap.has(key)
*/

var map = new Map();
map.set('key1', "value 1");

console.log(map.get("key1"));
map.delete("key1");
console.log(map.get("key1"));
console.log(map.has("key1"));
