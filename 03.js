let arr1 = ["Item1", "item2"];

let arr2 = [];
console.log(`length of arr1 is ${arr1.length}`)
arr2 = arr1.slice(0, arr1.length) // 1 method to copy elements in new array 
console.log(arr1)
console.log(arr2)

let arr3 = [].concat(arr1); // 2 method to copy elemnts in the new array 
console.log("Array 3 : ", arr3)


// method 3: spread operator

let arr4 = [...arr1];
console.log("Array 4 : ", arr4);