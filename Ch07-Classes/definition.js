let student = {
    name: "Eden",
    printName: function () {
        console.log(this.name);
    }
}

student.printName();
student.name = "Özgür";
student.printName();

console.log("-------------------------------------");
function Student(name) {
    this.name = name;

    this.printName2 = function () {
        console.log("printName2", this.name);
    }
}
Student.prototype.printName = function () {
    console.log('Student.prototype.printName ', this.name);
}

var s1 = new Student("Özgür");
var s2 = new Student("Zana");
s1.printName();
s1.printName2();
s2.printName();
s2.printName2();