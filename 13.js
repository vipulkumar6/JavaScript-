//fill, some

const array = [1, 2, 3, 4, 5, 6, 7, 8, 10];


console.log(`Before fill method ${array}`)
array.fill(0, 1, 3);// 3-1=2 number of elemenet to be filled

console.log(array);



let ans = array.some((nums) => {
    return nums === 20;
})

console.log(ans)

