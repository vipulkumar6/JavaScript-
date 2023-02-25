// methodds
// function inside objects

const users =
{
    id: 1,
    name: "Vipul",
    fun: function () {
        console.log(`Good Morning ${this.name}`);
    }
}


users.fun();

