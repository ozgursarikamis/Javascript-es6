var thenable = {
    then: function (resolve) {
        resolve('resolving');
        throw new TypeError('Throwing');
    }
};
var thenable2 = {
    then: function (resolve) {
        throw new TypeError('Throwing');
        resolve('resolving');
    }
};

var p3 = Promise.resolve(thenable);
p3.then(v => {
    console.log(v); // logs this, not the error
}, e => { console.error(e)});

var p4 = Promise.resolve(thenable2);
p4.then(v => {
    console.log(v);
}, e => { console.error(e)});  // logs error