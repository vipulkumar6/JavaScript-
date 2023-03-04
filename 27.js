console.log(3 + 5)

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "blue"
// document.getElementsByTagName("nav")[0].firstChild[0].firstElementChild.style.color = "red"

let a = document.getElementsByTagName("nav")[0].firstElementChild
let b = document.getElementsByTagName("nav")[0].lastElementChild
console.log(a);
console.log(b);

let c = document.getElementsByTagName("nav")[0].firstElementChild[0]

console.log(c);
Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.background = "cyan"
});