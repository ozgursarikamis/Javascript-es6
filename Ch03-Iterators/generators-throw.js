function* generatorFunc() {
    try {
        yield 1;
    } catch (error) {
        console.error(`error 1: ${error}`);
    }
    try {
        yield 2;
    } catch (error) {
        console.error(`error 2: ${error}`);
    }
    try {
        yield 2 / 0;
    } catch (error) {
        console.error(`error 3: ${error}`);
    }
}

var generator = generatorFunc();
console.log(generator.next());
console.log(generator.throw("exception thrown").value);
console.log(generator.throw("exception thrown").done);
console.log(generator.throw("exception thrown").done);