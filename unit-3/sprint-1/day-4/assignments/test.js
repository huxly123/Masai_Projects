function test(){
    let n="rr"
    return function(){
        console.log(n);
    }
}
console.log(test());