/**

    let value = arr.reduce(function(accumulator, item, index, array) {
    // ...
    }, [initial]);

*/

let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((acc, item, index, arr) => {
    console.log('acc', acc);
    console.log('item', item);
    console.log('index', index);
    // console.log('arr', arr);
    console.log("");
    return acc + item;
}, 0);

// let result = arr.reduce((sum, content) => {
//     return sum + content;
// }, 0);
console.log('result', result);

// reduceRight is the same with reduce, but starts from right:
const _result = arr.reduceRight((acc, item, index, arr) => acc - item, 15);
console.log('_result', _result);

const __result = arr.reverse().reduce((acc, item) => acc - item, 15);
console.log('__result', __result);