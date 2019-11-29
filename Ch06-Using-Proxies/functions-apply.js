var person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

var person1 = {
    firstName: "Özgür", lastName: "Sarıkamış"
};
const fullName = person.fullName.apply(person1);
console.log(fullName);

// Compared with the call() method:
var p = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + " " + city + " " + country;
    }
}

var p1 = { firstName: "John", lastName: "Doe" };
var fName = p.fullName.call(p1, "Oslo", "Norway");
console.log(fName);