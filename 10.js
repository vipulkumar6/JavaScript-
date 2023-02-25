// const Number = [1, 2, 3, 4];

// function myfun(Number, Index) {
//     console.log(`Value at index ${Index} is ${Number * 2}`);


// }

// Number.forEach(myfun);




const users = [
    {
        fname: "Vipul",
        age: 23
    },
    {
        fname: "Shuaib",
        age: 20
    },
    {
        fname: "Madhav",
        age: 30
    },
    {
        fname: "Rahul",
        age: 19
    },
    {
        fname: "Ajay",
        age: 14
    },
]



users.forEach(function (value, index) {
    if (value.age >= 20) {
        console.log(`Comgratulatiosn ${value.fname} You are eligible your age is ${value.age}`)
    }
    // console.log(value.age)
})