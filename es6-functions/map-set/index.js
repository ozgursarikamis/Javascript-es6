let map = new Map();
map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1');

console.log('map.get(1)', map.get(1));
console.log(`map.get('1')`, map.get('1'));
console.log(`map.get(true)`, map.get(true));
console.log('map.size', map.size);

let john = { name: 'John' };

let visitsCountMap = new Map();
const ozgur = { name: 'Özgür' };
visitsCountMap.set(john, 123).set(ozgur, 321); // chain the map
console.log('visitsCountMap.get(john)', visitsCountMap.get(john));
console.log('visitsCountMap.get(ozgur)', visitsCountMap.get(ozgur));