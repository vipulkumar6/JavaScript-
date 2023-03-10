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
    btn.addEventListener("click", function () {

        console.log(this.textContent)
    })
}
// for (let btn of btns) {
//     btn.addEventListener("click", fucntion(){
//         console.log("Clicked");
//     })
// }
