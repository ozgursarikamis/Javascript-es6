function myFunc(a, b) {
    return a + b;
}

let data = [1, 4, 5, 7];
let result = myFunc(...data);
console.log('result', result)