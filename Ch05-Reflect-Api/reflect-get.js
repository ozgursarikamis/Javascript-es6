var obj = {
    name: "Özgür"
};

Reflect.defineProperty(obj, "name", {
    get: function () {
        return this.name;
    }
});

console.log(obj.name);