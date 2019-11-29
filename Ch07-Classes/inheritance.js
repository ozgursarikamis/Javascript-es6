let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;
console.log('rabbit', rabbit);
console.log('rabbit.eats', rabbit.eats);
console.log('rabbit.jumps', rabbit.jumps);