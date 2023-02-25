// splice method
// start, delete, insert
//in the mid or start



const myarr = [1, 2, 3, 4, 5, 6];

const itemdel = myarr.splice(2, 3, "Hello");
console.log(`Remain elemen in original array :  ${myarr}`)
console.log(itemdel)