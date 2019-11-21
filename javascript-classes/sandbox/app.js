let mixin = {
    madeIn(){
        console.log('This car was made in year 2019!');
    }
}

let carMixin = {
    __proto__: mixin,
    madeIn() {
        super.madeIn();
    }
}

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

class SUV extends Car {
    constructor(doors, engine, color,    brand, carStats) { // carStats overrided
        super(doors, engine, color, brand, carStats);
        this.brand = brand;
        this.wheels = 4;
        this.ac = true;

        // assign mixin:
        Object.assign(this, carMixin);
    }

    myBrand(){
        return console.log(`This SUV is a ${this.brand}`)
    }
}

const cx5 = new Car(5, 'v6', 'grey');
const civic = new SUV(3, 'v4', 'blue');

const suv = new SUV(5, 'v8', 'black', 'Volvo');
console.log('suv', suv);
console.log('cx5', cx5);
console.log(suv.myBrand());
console.log('suv mixin', suv.madeIn());
console.log('civic', cx5);
// console.log('cx5 Stats:', cx5.carStats());
// console.log(Car.totalDoors(cx5, civic));

// TODO: Mixins:
// https://javascript.info/mixins
