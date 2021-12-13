function convert(amount, expectedOutputformat) {
    if (expectedOutputformat === "mb") {
        let ans = amount / 1000000;
          return `${ans} mb`;
    }
    if (expectedOutputformat === "kb") {
        let ans = amount / 1000
          return `${ans} kb`;;
    }
    

    return ans
}

console.log(convert(1000,"mb"));

module.exports=convert




//1000000