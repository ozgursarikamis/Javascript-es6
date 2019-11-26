var obj = {};

Reflect.defineProperty(obj, "name", {
    value: "Eden",
    writable: false,
    configurable: true,
    enumerable: true,
});

console.log(obj.name);
obj.name = "Özgür";
console.log(obj.name); // still Eden

var o = {
    __name__ : "Eden"
}

Reflect.defineProperty(o, "name", {
    get: function () {
        return this.__name__;
    },
    set: function (newName) {
        this.__name__ = newName;
    },
    configurable: true,
    enumerable: true,
});

o.name = "Johnathan";
console.log('o.name', o.name);