function init() {
    var name = "Mozilla";
    function displayName() {
        console.log('name', name);
    }
    displayName();
}

// init();

// closure: displayName is returned
// when it is not even executed.
function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        console.log('name', name);
    }
    return displayName;
}

var myFunc = makeFunc();
// myFunc();

function makeAdder(x) {
    return function (y) {
        return x + y;
    }
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log('add5(2):', add5(2));
console.log('add10(2)', add10(2));

/*
    add5 and add10 are both closures. 
    They share the same function body definition, 
    but store different lexical environments. 
*/