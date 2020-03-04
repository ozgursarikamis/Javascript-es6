let arr = ["a", "b", "c", "d"];

arr.forEach((item, index, array) => {
    console.log('arr[index]', arr[index]);
    console.log({item, index, array});    
});