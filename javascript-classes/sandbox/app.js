class Car {
    constructor(doors, engine, color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
    carStats(){
        return `This car has ${this.doors} doors, a ${this.engine} and a beautiful ${this.color}!`
    }
}
sayHi();
const cx5 = new Car(5, 'v6', 'grey');
console.log('cx5', cx5);
console.log('cx5 Stats:', cx5.carStats());

function sayHi() {
    return console.log("This function can be called anywhere");
}

sayHi();