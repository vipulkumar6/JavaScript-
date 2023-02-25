let people = [
    { name: "John", age: 90 },
    { name: "Oliver", age: 20 },
    { name: "Michael", age: 30 },
    { name: "Dwight", age: 20 },
    { name: "Oscar", age: 20 },
    { name: "Kevin", age: 50 },
];
var found = [];
found = people.reduce((Accu, currVal) => {
    // return Accu + currVal.age;
    found.push(currVal.age)
    return found;
}, 0)

console.log(found);

console.log("After Sorting !");
found.sort();
console.log(found);



const nums = [5, 23, 3532, 10, 50, 10313];

nums.sort((a, b) => a - b);
console.log(nums);