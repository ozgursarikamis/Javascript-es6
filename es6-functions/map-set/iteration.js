let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50],
]);

for (const key of recipeMap.keys()) {
    console.log('key', key);
    console.log('value', recipeMap.get(key));
}
/*
    The iteration goes in the same order as the values were inserted. 
    Map preserves this order, unlike a regular Object.
*/

for (const entry of recipeMap) {
    console.log('entry', entry);
}

recipeMap.forEach((value, key, map) => {
    console.log('value', value)
    console.log('value', key)
    console.log('value', map)
    console.log("");
});