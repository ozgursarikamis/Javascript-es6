function solution(A) {
    let results = [];
    for (let i = 1; i < A.length; i++) {        
        const element = A[i];
        console.log('element', element);
        let sliced = A.slice(i);
        let _sliced = A.slice(0, i);
        let sum = sliced.reduce((x, y)=> { return x + y; }, 0);
        let _sum = _sliced.reduce((x, y)=> { return x + y; }, 0);
        console.log('sum', { sum, _sum });
        console.log('sliced', sliced); 
        console.log('_sliced', _sliced); 
        results.push(Math.abs(sum - _sum));
    }
    return Math.min(...results);
}

const A = [3, 1, 2, 4, 3];
const r = solution(A);
console.log('r', r);

// https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/