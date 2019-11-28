let target = {};
let proxy = new Proxy(target, { });

proxy.test = 5;
// console.log(target.test);
// console.log(proxy.test);

for(let key in proxy) console.log(key);

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