// optional chaining

const users = [
    {
        id: 1,
        // fname: 'Vipul',
    },
    {
        id: 12,
        // fname: 'Aamn',
    },
    {
        id: 13,
        fname: 'Nikhil',
    },
]

for (let user of users) {
    console.log(user?.fname)
}