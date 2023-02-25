
// sets, no index based acces, elements can be store in any order
// no duplicacy allowed, store data, it is a iterable

// sets methods-> has, add
const myset = new Set([1, 2, 3, 3, 4, 5, 5]);

console.log(myset);

myset.add(10);
myset.add(13);
const ans = myset.has(5);
console.log(ans);
console.log(myset);