var obj = {
    name: "Özgür"
}

console.log(obj);
Reflect.deleteProperty(obj, "name");
console.log('obj', obj);