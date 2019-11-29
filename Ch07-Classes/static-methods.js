class Student {
    constructor(name) {
        this.name = name;
    }
    static findName(student){ 
        return student.name;
    }
}
console.log("--------------------------------------------------------------")
var s = new Student("Eden");
const name = Student.findName(s);
console.log(name);
console.log("--------------------------------------------------------------")
