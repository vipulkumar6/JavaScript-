const arr = ["Apple", "Mango", "Banana"];

const [var1] = arr;

console.log(var1);
console.log("var2");



const obj = {
    name: "Vipul",
    id: 1,
    hobbies: ["music", "Blogging", "UI Design"]
}
console.log(obj.name)


// add key value pair 

obj.gender = "male";
console.log(obj)



// iterate the object  elements

for (let key in obj) {
    console.log(obj[key])
}

console.log("Another Wayy ! ")
for (let key in obj) {
    console.log(`Key is ${key} and key value is ${obj[key]}`)
}

console.log(typeof (obj))
console.log(Object.keys(obj))