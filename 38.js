const a = document.querySelector("h1")


const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")



setInterval(() => {
    heading1.textContent = "Heading 1 chnaged";

    setInterval(() => {
        heading2.textContent = "Heading 2 chnaged";
        setInterval(() => {
            heading3.textContent = "Heading 3 chnaged";

        }, 1000);
    }, 1000);

}, 1000);

