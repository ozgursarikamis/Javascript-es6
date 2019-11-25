const loader = document.getElementById("loading");

function showLoading() {
    console.log("loading started");
    loader.style.display = "inline-block";
}
function hideLoading() {
    console.log("loadding ended");
    loader.style.display = "none";
}


function asyncFunc(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onloadstart = () => { 
            console.log("loading is ongoing");
            setTimeout(() => {
                resolve(xhr.responseText);
            }, 5000);
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
const promise = asyncFunc(url);
Promise.resolve(promise).then(x => {
    console.log(JSON.parse(x))}
);
