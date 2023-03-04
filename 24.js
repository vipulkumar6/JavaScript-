
const myfun = (nums) => {
    let add = 0;
    nums = nums.toString();
    for (let num = 0; num < nums.length; num++) {


        let n = parseInt(nums[num]);
        add = add + n

    }
    // console.log(add);
    return add;

}

function newfun() {
    console.log("called !")
}

let str = 25;

while (str > 9) {

    str = myfun(str)
}
console.log(str)
