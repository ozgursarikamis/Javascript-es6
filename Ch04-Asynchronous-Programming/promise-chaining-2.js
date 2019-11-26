const loader = document.getElementById("loading");

// loader.style.display = "inline-block";

let p1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'p1');
});

let p2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000, 'p2');
});

let p3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1200, 'p3');
});

let p4 = new Promise(function(resolve, reject) {
    setTimeout(reject, 300, 'p4');
});

let p5 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 800, 'p5');
});


// let promise = Promise.all([
//     p1, p2, p3, p4, p5
// ]);
let promise = Promise.all([
    p1.catch(function() {}), 
    p2.catch(function() {}), 
    p3.catch(function() {}), 
    p4.catch(function() { 
        // loader.style.display = "none"; 
    }), 
    p5.catch(function() {})
]);


// loader.style.display = "inline-block";
promise.then(data => {
    data.forEach(d => console.log('d :', d));
}).catch(error => {
    // loader.style.display = "none";
    console.error(error);
}).finally(() => {
    const hide = confirm("hide loading?");
    if (hide) {
        loader.style.display = "none";
    }
});