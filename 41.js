const url = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

xhr.open("GET", url);
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//         const res = xhr.response;

//         const data = JSON.parse(res);
//         const id = data[2].id;
//         const url2 = `${url}/{id}`
//         console.log(url2)
//     }
// }
xhr.onload = () => {
    const res = xhr.response;

    const data = JSON.parse(res);
    const id = data[3].id;
    console.log(id)
    const xhr2 = new XMLHttpRequest();
    const url2 = `${url}/${id}`
    console.log(url2)

    xhr2.open("GET", url2)
    xhr2.onload = () => {
        const res = xhr2.response;

        const data = JSON.parse(res);
        console.log(data)
    }
    xhr2.send();
}
xhr.send();