let map = new Map();
let o = { n: 1 };
map.set(o, "A");
map.set("2", 9);

console.log('map', ...map);
console.log(map.get("2"));
console.log(map.get(o));