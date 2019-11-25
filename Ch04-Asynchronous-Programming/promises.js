const promise = new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();
    var url = "https://jsonplaceholder.typicode.com/todos/1";

    request.open("GET", url);

    request.addEventListener("load", () => {
        if (request.status === 200) {
            resolve(request.responseText);
        } else {
            reject("Server Error: ", request.status);
        }
    }, false);

    request.addEventListener("error", () => {
        reject("Cannot Make AJAX Request");
    }, false);

    request.send();
});

promise.then(x => {
    console.log(JSON.parse(x));
});

// Creates a new resolved promise for the provided value.
Promise.resolve(promise).then(x => console.log(JSON.parse(x)));