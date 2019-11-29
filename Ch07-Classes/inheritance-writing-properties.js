let animal = {
    eats: true,
    walk: function () {
        console.log("walking...");
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