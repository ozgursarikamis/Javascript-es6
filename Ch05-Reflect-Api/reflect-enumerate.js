var obj = {
    a: 1, b: 2, c: 3, d: "Özgür"
};

// Deprecated! Do not use it:
// var iterator = Reflect.enumerate(obj);
// console.log('iterator.next().value', iterator.next().value);

// INSTEAD:
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        const element = obj[key];
        console.log(element);
    }
}
// OR:
for (let [key, value] of Object.entries(obj)) {
    console.log({key}, {value});
}