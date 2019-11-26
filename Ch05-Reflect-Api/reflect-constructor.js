function OneClass() {
    this.name = "one";
}

function OtherClass() {
    this.name = "other";
}
var args = {};
// calling this:
var obj1 = Reflect.construct(OneClass, args, OtherClass);

// has the same result as this:
var obj2 = Object.create(OtherClass.prototype);
OneClass.apply(obj2, args);

console.log(obj1.name);
console.log(obj2.name);