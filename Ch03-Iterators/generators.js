function* generator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

let gen = generator();

console.log('generator 1', {
    value : gen.next().value
}); 

console.log('generator 2', {
    value : gen.next().value
}); 

console.log('generator 3', {
    value : gen.next().value
}); 

console.log('generator 4', {
    value : gen.next().value
}); 

console.log('generator 5', {
    value : gen.next().value
}); 
if (!gen.next().done) {    
    console.log('generator 1', {
        value : gen.next().value
    });  
}