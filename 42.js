const url = "https://jsonplaceholder.typicode.com/posts";

const ans = fetch(url).then((res) => {
    if (res.ok === true) {
        return res.json();
    }
    else
        throw new Error("Something went wrong with thiss!")
}).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log("this is error", err)
})


// console.log(ans)