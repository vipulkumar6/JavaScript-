const lang = {
    name: "CPP",
    year: 1985,
    type: "High level language",
    scientits: "Bjarne Stroustrup"

}

const { name: var1, year: var2, ...rest } = lang;

console.log(var1);
console.log(var2);
console.log(rest);
