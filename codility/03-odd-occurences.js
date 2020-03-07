function solution(A) {  
    // let tempA = A; 
    let elementArray = [];
    for (let i = 0; i < A.length; i++) {
        const element = A[i];
        elementArray.push(A.filter(x => x == element)); 
    }
    return elementArray.find(x => x.length === 1)[0];
}

// const A = [7, 9, 3, 9, 3, 9, 9];
const A = [9, 3, 9, 3, 9, 7, 9];
const r = solution(A);
console.log('r', r);