// promise

// function myPromise() {
//     return new Promise((resolve, reject) => {
//         let value = false;
//         if (value) {
//             resolve()
//         }
//         else
//             reject();
//     })
// }

// myPromise().then(() => {
//     console.log("Resolved hua")
// }).catch(() => {
//     console.log("Reject hua")
// }) 



const myPromise = Promise.resolve(10);

myPromise.then((value) => {
    console.log(value)
})

// then () -> return always promise 

