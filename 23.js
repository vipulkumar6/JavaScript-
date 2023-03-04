

let n = prompt("Enter no of elements: ");
n = parseInt(n);
const arr = [n];
console.log(arr.length);

for (let i = 0; i < n; i++) {
    let a = prompt("");
    a = parseInt(a);
    if (a === 0) {
        break;
    }

    arr.push(a);
}

console.log(arr)