let animal = {
    eats: true,
    walk() {
        console.log("walking inside");
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal,
};

let longEar = {
    earLength: 10,
    __proto__: rabbit
}
console.log("--------------------------------------------------------------")
var longEarWalks = longEar.walk;
var rabbitWalks =  rabbit.walk();
var longEarJumps = longEar.jumps;

console.log("Trigger the method");
longEarWalks();

console.log("longEar.jumps \t : ", longEarJumps);
console.log("--------------------------------------------------------------")

