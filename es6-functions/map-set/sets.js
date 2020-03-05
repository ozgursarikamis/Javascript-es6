let set = new Set();
let j = { name: "John" }
let p = { name: "Pete" }
let m = { name: "Mary" }
let n = { name: "Mary" }  

set.add(j).add(p).add(m).add(j).add(n);

console.log('set', set);

for (const i of set) {
    console.log('i', i.name); 
}

set.forEach((value, valueAgain, set) => {
    console.log('value', value);
    console.log('valueAgain', valueAgain);
    console.log('set', set);
}) 
console.log('set', set);