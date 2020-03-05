let user = {
    name: "John",
    age: 30
};

for (const value of Object.values(user)) {
    console.log('value', value);
}
console.log("");

for (const key of Object.keys(user)) {
    console.log('key', key);
}

let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let doublePrices = Object.fromEntries(
    // convert to array, map, and then fromEntries gives back the object
    Object.entries(prices).map(([key, value]) => [key, value * 2])
);

console.log('doublePrices.meat', doublePrices.meat);