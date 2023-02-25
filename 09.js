// {
//     const fname = "Vipul"
//     let lname = "Chuahan"
//     var fullname = "Vipul Chauhan"
//     // console.log(fname);
// }
// // console.log(fname); // not print 
// // console.log(lname); // not print 
// console.log(fullname); // will print 



function myfun(...c) {
    let sum = 0;
    for (let num of c) {
        sum = sum + num;
    }
    console.log(sum);
}



myfun(1, 2, 3, 4, 5, 6);
