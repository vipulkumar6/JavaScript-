// let a = confirm("Do you want to change the color")
// if (a) {

//     console.log("Yes")
//     document.body.style.background = "red" // background will be red by user requirments
//     // document.body.style.color = "#fff"
// }
// else {
//     console.log("NO")
// }

// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// console.log(document.body.childNodes)

const t = document.body.firstElementChild.firstElementChild;
// console.log(t.rows);
// console.log(t.tHead).firstElementChild;
// console.log(t.tbody);

// let ans = document.getElementsByClassName("nav-link")[0];
// console.log(ans);
// ans.style.color = "red";


let q2 = document.querySelectorAll(".nav-link")
q2[0].style.color = "blue";
// console.log(q2);

let q3 = document.querySelector(".navbar-nav").getElementsByTagName("a");
console.log(q3)
