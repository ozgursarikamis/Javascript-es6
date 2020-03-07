function solution(A) {
    let min = Math.min(...A);
    for (let i = 0; i < A.length; i++) {
        let f = A.find(x => x === min);
        if (!f) {
            return min++;
        }
        min++;
    }
}

const A = [2, 1, 3, 5]
const r = solution(A);
console.log('r', r);