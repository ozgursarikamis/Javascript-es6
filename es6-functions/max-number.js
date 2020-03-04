function find_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
    for (let num of nums) {
        if (num > max_num) {
            max_num = num
        }
    }
    return max_num;
}

const r = find_max([9, 7, 665]);
console.log('r', r);