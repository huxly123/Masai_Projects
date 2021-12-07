function fact(a) {
    if (a == 1) {
        return 1
    }
    return a+ fact(a-1)
}
console.log(fact(3));
module.exports=fact