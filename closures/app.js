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
myFunc();