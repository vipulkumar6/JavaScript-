// objects inside array
// very useful in real world applications

const users = [
    {
        id: 1,
        name: "Vipul",
        STD: "Btech"
    }, {
        id: 2,
        name: "Mr. Shuaib bhai",
        STD: "MCA"
    }, {
        id: 3,
        name: "Madhav",
        STD: "BCA"
    }
]

for (let user of users) {
    console.log(user.name)
}
console.log(users)