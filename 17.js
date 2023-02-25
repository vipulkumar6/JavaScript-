const myMap = new Map();

myMap.set('fname', 'Vipul');
myMap.set('lname', 'Kumar');

console.log(myMap)

console.log(myMap.get('fname'))

console.log(myMap.keys())


for (let key of myMap.keys()) {
    console.log(key)
}

for (let [key, value] of myMap) {
    console.log(key, " : ", value)
}