function* generatorFunc() {
    yield [2, 3];
}
function* generatorFunc2() {
    yield 2;
    yield* generatorFunc();
    yield* [4, 5];
}

var generator = generatorFunc2();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

// The yield* keyword inside a generator function takes 
// an iterable object as the
// expression and iterates it to yield its values