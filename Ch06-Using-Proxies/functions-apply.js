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