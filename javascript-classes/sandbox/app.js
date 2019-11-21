class Car {
    constructor(doors, engine, color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
    carStats(){
        return `This car has ${this.doors} doors, a ${this.engine} and a beautiful ${this.color}!`
    }

    static totalDoors(car1, car2) {
        const doors1 = car1.doors;
        const doors2 = car2.doors;

        return doors1 + doors2;
    }
}
sayHi();
const cx5 = new Car(5, 'v6', 'grey');
const civic = new Car(3, 'v4', 'blue');

console.log('cx5', cx5);
console.log('cx5 Stats:', cx5.carStats());
console.log(Car.totalDoors(cx5, civic));
function sayHi() {
    return console.log("This function can be called anywhere");
}

sayHi();