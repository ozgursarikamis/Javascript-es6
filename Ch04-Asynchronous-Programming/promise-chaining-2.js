const loader = document.getElementById("loading");

loader.style.display = "inline-block";

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


let promise = Promise.all([
    p1, p2, p3, p4, p5
]);

promise.then(data => {
    loader.style.display = "inline-block";
    data.forEach(d => console.log('d :', d));
}).catch(error => {
    loader.style.display = "none";
    console.error(error);
});