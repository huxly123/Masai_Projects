
function commom(str1,str2,dp) {
    for (let i = 1; i < dp.length; i++){
        for (let j = 1; j < dp[0].length; j++){
            if (str2[i - 1] == str1[j - 1]) {
                dp[i][j]=1+dp[i-1][j-1]
            } else {
                dp[i][j]=Math.max(dp[i][j-1],dp[i-1][j])
            }
        }
    }
    return dp[str2.length][str1.length]
}


function runProgram(input) {
    input = input.trim().split("\n");
    let str1 = input[0].trim().split("");
    let str2 = input[1].trim().split("");
    let n1 = str1.length;
    let n2 = str2.length;
    let dp =new Array(n2 + 1).fill(0).map((e) => new Array(n1 + 1).fill(0))
    console.log(commom(str1,str2,dp));

}
if (process.env.USERNAME === "huxly") {
  runProgram(`AEDFHR
ABCDGH`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
