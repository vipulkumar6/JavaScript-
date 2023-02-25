// call apply and bind 
// in arraw function this will not be work , coz this in array fun will be 
// consider as one level up i.e window
const user1 = {
    name: "Vipul",
    age: 20,
    about: function () {
        console.log(this.name, this.age);
    }
}
const user2 = {
    name: "Shuaib",
    age: 22,

}

user1.about.call(user2);
