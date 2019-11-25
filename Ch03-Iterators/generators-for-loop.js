function* generatorFunc() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

let array = [1, 2, 3];
for (const value of generatorFunc()) {
    console.log(value);
}

for (const value of array) {
    console.log(value)
}