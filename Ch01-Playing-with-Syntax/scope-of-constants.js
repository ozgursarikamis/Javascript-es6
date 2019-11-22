const a = 12;

function myFun() {
    console.log('a', a);
    const b = 13;

    if (true) {
        const c = 14;
        console.log('b', b)
    }
    console.log('c', c);
}

myFun();