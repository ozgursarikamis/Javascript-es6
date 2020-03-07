function solution(A, K) { 
    for (let i = 1; i <= K; i++) {
        const deleted = A.pop(); 
        A.unshift(deleted);
    }
    return A;
} 
const a = [1, 2, 3, 4];
const k = 4;

const r = solution(a, k);
console.log('r', r);