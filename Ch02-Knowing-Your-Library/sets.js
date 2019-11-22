let set1 = new Set("Hello!");
set1.add(12);
console.log('set1', set1);
console.log('set1.has("!")', set1.has("!"));
console.log('set1.size', set1.size);
set1.delete(12);
console.log('set1', set1);
set1.clear();
console.log('set1', set1);
