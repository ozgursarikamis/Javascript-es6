function solution(x, y, d) {
    let distance = y - x;
    let resolve = Math.floor(distance / d);
    return resolve + 1;    
}

const r = solution(20, 45, 4);
const _r = solution(10, 85, 30);
console.log('r', r);
console.log('_r', _r);