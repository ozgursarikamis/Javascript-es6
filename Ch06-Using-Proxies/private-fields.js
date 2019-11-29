class User {
    name = "Guest";
    // #name = "Guest"; private fields are not currently supported

    getName(){
        return this.name;
    }
}

let user = new User();

user = new Proxy(user, {
    get(target, prop, receiver) {
        let value = Reflect.get(...arguments);
        return typeof value == 'function' ? value.bind(target): value;
    }
})

console.log(user.getName());