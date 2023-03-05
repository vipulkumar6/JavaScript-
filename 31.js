let val = document.getElementsByClassName("navlinks")
console.log(val[0])
console.log(val[1])

console.log(val.length)


// simple for loop
for (let i = 0; i < val.length; i++) {
    let item = val[i];
    item.style.color = "cyan"
    console.log(val[i].textContent);

}

// for of loop 
for (item of val) {
    console.log(item.textContent)
}




let headline = document.querySelector("#heading");

console.log(headline.innerHTML = "Hello DOM")
console.log(headline.innerHTML += " This is Vipul")

