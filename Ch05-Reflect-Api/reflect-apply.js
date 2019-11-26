function Func(a, b, c) {
    return this.value + a + b + c;
}

var returnVal = Reflect.apply(Func, { value: 100 }, [10, 20, 30]);
console.log('returnVal', returnVal);