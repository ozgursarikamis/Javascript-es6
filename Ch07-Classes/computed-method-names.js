const s = Symbol("SampleSymbol");

class MyClass {
    static ["my" + "Method"](){
        console.log("Hello");
    }

    static [s](){
        console.log("Hello 'Symbol'ic Method");
    }
}

MyClass.myMethod(); // is equals to:
MyClass["m" +"yMethod"](); // is equals to:
MyClass["myMe" +"thod"]();

console.log("--------------------------------------------------------------")
MyClass[s]();