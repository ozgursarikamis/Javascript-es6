function multiply(a) {
    return function executeMultiply(b) {
        return a * b;
    }
}

const double = multiply(2);
console.log('double(3)', double(3));
console.log('double(5)', double(5));

const triple = multiply(3);
console.log('triple(4)', triple(4));

// https://dmitripavlutin.com/simple-explanation-of-javascript-closures/