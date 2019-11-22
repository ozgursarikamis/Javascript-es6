var o = {
    f1: () => {
        console.log('this, in arrow: ', this) // refers to global scope
    },
    f2: function () {
        console.log('this in func: ', this); // refers to parent object
    }
}

o.f1();
o.f2();
console.log('this in global: ', this);