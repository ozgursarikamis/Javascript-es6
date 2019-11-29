let animal = {
    eats: true,
    walk: function () {
        console.log("walking...");
        if (!this.isSleeping) {
            console.log('I am not sleeping.');
        }
    },
    sleep: function () {
        this.isSleeping = true;
    }
}

let rabbit = {
    __proto__: animal
}

// overriding the inherited function
rabbit.walk = function () {
    console.log("rabbit walks");
}

rabbit.walk();
console.log("--------------------------------------------------------------");
rabbit.sleep();
console.log('rabbit', rabbit);
console.log('animal', animal);
console.log("--------------------------------------------------------------");

for (const key in rabbit) {
    if (rabbit.hasOwnProperty(key)) {
        const element = rabbit[key];
        console.log(element);
    }
}