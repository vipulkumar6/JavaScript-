// getter and setter 
class user {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    get fullName() {
        console.log(`my full name is ${this.fname} ${this.lname}`)
    }
    set fullName(fullName) {
        fullName.split();
    }
}
const user1 = new user('Vipul', 'Kumar', 21);
console.log(user1.fullName);
user1.fullName = "Vipul Chauhan";
console.log(user1.fullName)
