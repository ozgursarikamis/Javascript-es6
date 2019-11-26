const loader = document.getElementById("loading");

function showLoading() {
    console.log("loading started");
    loader.style.display = "inline-block";
}
function hideLoading() {
    console.log("loadding ended");
    loader.style.display = "none";
}


function asyncFunc(url, delay) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onloadstart = () => {
            console.log("loading is ongoing");
            setTimeout(() => {
                // resolve(xhr.responseText);
                resolve("resolved");
                
            }, delay);
            showLoading();
        };
        xhr.onloadend = () => { hideLoading(); };
        xhr.onload = () => {
        }
        xhr.onerror = () => { hideLoading(); reject(xhr.statusText); }
        xhr.send();
    });
}

const url = "https://jsonplaceholder.typicode.com/users";
const promise1 = asyncFunc(url, 500);
const promise2 = asyncFunc(url, 600);
const promise3 = asyncFunc(url, 700);
const promise4 = asyncFunc(url, 800);
const promise5 = asyncFunc(url, 900);

var promise = Promise.all([promise1, promise2, promise3]);
promise.then(x => {
    x.forEach(y => {
        console.log('y :', y);
    });
});
