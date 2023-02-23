
//spread operator 
// const array = [1, 2, 3];
// const array2 = [4, 5, 6];

// const array3 = [...array, ...array2, 56, 676, 1];

// const arr4 = [..."vipul"]
// console.log(arr4)

// console.log(array3)

const obj1 = {
    id: 1,
    name: "Vipul"
}
const obj2 = {
    id: 3,
    name2: "Aman"
}

const obj3 = { ...obj1, ...obj2, key4: 20 }

console.log(obj3)

