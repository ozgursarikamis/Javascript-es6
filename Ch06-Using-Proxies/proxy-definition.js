let target = {};
let proxy = new Proxy(target, { });

proxy.test = 5;
// console.log(target.test);
// console.log(proxy.test);

// for(let key in proxy) console.log(key);

let numbers = [0, 1, 2];
numbers = new Proxy(numbers, {
    get(target, prop) {
        if (prop in target) {
            return target[prop];
        } else {
            return 0;
        }
    }
});

// console.log('numbers[1]', numbers[1]);
// console.log('numbers[123]', numbers[123]);

let dictionary = {
    "Hello": "Hola",
    "Bye": "Adios"
}

let p = new Proxy(dictionary, {
    get(target, phrase) { // intercept reading a property from dictionary
        if (phrase in target) {
            return target[phrase];
        } else {
            return `Translation not found for: ${phrase}`;
        }
    }
});

// console.log(dictionary["Hello"]);
// console.log(dictionary["Welcome"]);
// console.log(p["Welcome"]);

let nums = [];

nums = new Proxy(nums, {
    set(target, prop, val) {
        if (typeof val === 'number') {
            target[prop] = val;
            return true;
        } else {
            return false;
        }
    }
});

nums.push(1);
nums.push(2);
nums.push("test");
console.log(nums);