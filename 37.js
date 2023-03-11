// const a = "Hello Sir"
// console.log("Start session")

// const id = setTimeout(() => {
//     console.log("yes Inside timeout")
// }, 1000); // min time waiting
// console.log(id)


// clearTimeout(id)
// console.log("End session")
// console.log("Session Start")


// const id = setInterval(() => {
//     console.log(Math.floor(Math.random() * 5))
// }, 1000);

// console.log("Session End")
// let wrap = document.getElementsByClassName("wrap")


const body = document.body;
const intervealId = setInterval(() => {
    const red = Math.floor(Math.random() * 126);
    const green = Math.floor(Math.random() * 126);
    const blue = Math.floor(Math.random() * 126);

    const rgb = `rgb(${red},${green},${blue})`;
    console.log(rgb)
    body.style.background = rgb;
}, 1000);

const button = document.querySelector("button");

button.addEventListener("click", () => {
    clearInterval(intervealId);
})

// setInterval(() => {
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);
//     const rgb = `rgb(${red},${green}, ${blue})`;
//     body.style.background = rgb;
// }, 1000);

// const body = document.body;
// const button = document.querySelector("button");
// const intervalId = setInterval(() => {
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);
//     const rgb = `rgb(${red},${green}, ${blue})`;
//     body.style.background = rgb;
// }, 1000);

// button.addEventListener("click", () => {
//     clearInterval(intervalId);
//     button.textContent = body.style.background;
// });

// console.log(intervalId);