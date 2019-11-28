let user = {
    name: "John",
    age: "30",
    _password: "Abc123"
}

user = new Proxy(user, {
    ownKeys(target) {
        return Object.keys(target)
        .filter(key => !key.startsWith('_'))
    }
});

for(let key in user) console.log(key);

let u = { };

u = new Proxy(u, {
    ownKeys(target) {
        return ['a', 'b', 'c'];
    }
});

console.log(Object.keys(u));