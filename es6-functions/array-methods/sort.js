let arr = [1, 2, 15];

console.log('arr.sort()', arr.sort()); // lexicographic order: 1, 15, 2

const sorted = arr.sort(function (a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
});

/*
Actually, a comparison function is only required to return a positive number 
to say “greater” and a negative number to say “less”.
*/
const _sorted = arr.sort((a, b) => a - b);
console.log('sorted', sorted);
console.log('_sorted', _sorted);

// localCompare:

let countries = ['Österreich', 'Andorra', 'Vietnam'];
let _sortedCountries = countries.sort((a, b) => a > b ? 1 : -1);
console.log('_sortedCountries', _sortedCountries); // wrong!
_sortedCountries = countries.sort((a, b) => a.localeCompare(b));
console.log('_sortedCountries', _sortedCountries);