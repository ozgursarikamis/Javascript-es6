// Reflect is a built-in object that simplifies creation of Proxy.

let user = { id: 2643 };
Reflect.set(user, 'name', 'John');
console.log('user', user.name);

user = new Proxy(user, {
    get(target, prop, receiver){
        console.log(`GET ${prop}`);
        return Reflect.get(target, prop, receiver);
    },
    set(target, prop, value, receiver){
        console.log(`SET ${prop}=${value}`);
        return Reflect.set(target, prop, value, receiver);
    }
});

let name = user.name; // GET
user.name = 'Pete'; // SET