// IN ES5:
var object = { };
object["first" + "Name"] = "Eden";
object["first"] = "Name";

console.log('object.firstName', object.firstName);
console.log('first', object.first);