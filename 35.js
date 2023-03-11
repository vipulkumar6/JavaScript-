// // const data = document.querySelector(".box")


// // const info = data.getBoundingClientRect();
// // console.log(info)


// const btn = document.querySelector(".btn");

// function onClick() {
//     console.log("Clicked!")
// }

// btn.addEventListener("", () => {
//     console.log("Yes You Clicke me!")
// });


const btns = document.querySelectorAll(".wrap button")

console.dir(btns)

for (let btn of btns) {
    btn.addEventListener("click", function (e) {
        e.target.style.backgroundColor = "red"

    })
}
