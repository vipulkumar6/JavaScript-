const age = [20, 30, 40, 50, 60];

function check(val) {
    return val >= 20;
}
console.log(age.every(check))

const found = age.find((val) => {
    return val > 35
})

console.log(`The value is : ${found}`)