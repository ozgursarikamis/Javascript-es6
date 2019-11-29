class GeneratorClass {
    *generatorMethod(){
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
    }
}

var i = new GeneratorClass();
let generator = i.generatorMethod();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().done);
console.log("--------------------------------------------------------------")

console.log("generatorMethod" in GeneratorClass.prototype);