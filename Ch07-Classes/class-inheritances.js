function A(a) {
    this.a = a;
}

A.prototype.printA = function () {
    console.log('a', this.a);
}

class B extends A {
    constructor(a, b) {
        super(a);
        this.b = b;
    }
    printB() {
        console.log('b', this.b);
    }
    static sayHello() {
        console.log("Hello from B");
    }
}

// var testB = new B("__a__", "__b__");
// testB.printA();
// testB.printB();

class C extends B {
    constructor(a, b, c) {
        super(a, b);
        this.c = c;
    }

    printC() {
        console.log('c', c);
    }

    printSelfAll() {
        this.printA();
        this.printB();
        this.printC();
    }
    printSuperAll() {
        super.printA();
        super.printB();
        this.printC();
    }
}

var c = new C(1, 2, 3);
c.printSelfAll();
console.log("--------------------------------------------------------------")
c.printSuperAll();
console.log("--------------------------------------------------------------")
c.printA();