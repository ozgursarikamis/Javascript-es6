var canWinNim = function(n) {
    if (n === 1) {   
        return true;
    } else if(n === 2){
        return false;
    } else if (n % 2 === 0) {
        return false;
    } else {
        return true;
    }
};

for (let i = 1; i < 10; i++) {
    console.log({i, r: canWinNim(i)});
}