// async await 


const url = "https://jsonplaceholder.typicode.com/poskts";


async function getData() {
    const res = await fetch(url)
    if (res.ok == true) {
        const res = await fetch(url)
        const data = await res.json();
        return data;
    }
    else
        throw new Error("Error aa gyi hai bhaiii")
}

getData().then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})
// const returnValue = getData();
// console.log(returnValue)