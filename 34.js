// // document.createElement()
// // append
// // prepend
// // remove



// const item = document.createElement("li");
// const list = document.querySelector(".lists");
// const text = document.createTextNode("Hello 2");

// item.append(text);
// list.append(item)
// item.textContent = "New hello 2"
// list.prepend(item)
// console.log(item)

// //
// const list2 = document.querySelector("#lists li");

// list2.remove();
// // console.log(list)


// before and a// const item = document.createElement("li");fter
// const item = document.createElement("li");
// const list = document.querySelector("#lists");

// item.textContent = "This is before list";

// list.before(item)


const item = document.createElement("li");
const list = document.querySelector("#lists");

item.textContent = "This is before list";

list.after(item)

