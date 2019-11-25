function* generatorFucn() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = generatorFucn();
console.log(generator.next().value);
console.log(generator.return(22).value);
console.log(generator.next().done);